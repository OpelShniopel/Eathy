import axios from 'axios';

const APP_ID = process.env.EDAMAM_APP_ID;
const APP_KEY = process.env.EDAMAM_APP_KEY;
const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

interface Recipe {
    label: string;
    image: string;
    source: string;
    url: string;
    dietLabels: string[];
    healthLabels: string[];
}

interface RecipeResponse {
    hits: { recipe: Recipe }[];
}

const healthConditionsToApiParams: { [key: string]: { health?: string[], diet?: string[] } } = {
  'lactoseIntolerance': { health: ['dairy-free'] },
  'celiacDisease': { health: ['gluten-free'] },
  'heartDisease' : { diet: ['low-fat', 'low-sodium'] },
  'thyroidGlandDisorders' : { diet: ['balanced'] }
};

export const fetchRecipes = async (query: string, userHealthConditions: string[]): Promise<Recipe[]> => {
    try {
      const healthParams = userHealthConditions.flatMap(condition => healthConditionsToApiParams[condition]?.health || []).filter(Boolean);
      const dietParams = userHealthConditions.flatMap(condition => healthConditionsToApiParams[condition]?.diet || []).filter(Boolean);

      const response = await axios.get<RecipeResponse>(BASE_URL, {
        params: {
          type: 'public',
          q: query,
          app_id: APP_ID,
          app_key: APP_KEY,
          health: healthParams.length > 0 ? healthParams.join(',') : undefined,
          diet: dietParams.length > 0 ? dietParams.join(',') : undefined,
        },
      });
      return response.data.hits.map(hit => hit.recipe);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  };