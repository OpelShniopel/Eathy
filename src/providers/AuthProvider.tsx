import { Session } from "@supabase/supabase-js";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { Tables } from "@/types";
import {
  fetchSession,
  fetchProfile,
  subscribeToAuthStateChange,
} from "@/api/authService";

type AuthData = {
  session: Session | null;
  profile: Tables<"profiles"> | null;
  loading: boolean;
};

const AuthContext = createContext<AuthData>({
  session: null,
  loading: true,
  profile: null,
});

export default function AuthProvider({
  children,
}: Readonly<PropsWithChildren>) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      const session = await fetchSession();
      setSession(session);
      if (session?.user?.id) {
        const profile = await fetchProfile(session.user.id);
        setProfile(profile);
      }
      setLoading(false);
    };

    fetchInitialData();

    const subscription = subscribeToAuthStateChange(async (event, session) => {
      setSession(session);
      if (event === "SIGNED_OUT") {
        setProfile(null);
      } else if (event === "SIGNED_IN" && session?.user?.id) {
        const profile = await fetchProfile(session.user.id);
        setProfile(profile);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const authData = useMemo(
    () => ({ session, loading, profile }),
    [session, loading, profile],
  );

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
