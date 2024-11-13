# Eathy - Personalized Nutrition & Health Tracking App

## Overview

Eathy is a comprehensive nutrition and health tracking application built with React Native and Expo. It provides personalized nutrition guidance and health tracking capabilities, with special considerations for various health conditions and dietary requirements.

## Features

- **Personalized Nutrition Tracking**
  - Log daily food intake with detailed nutritional information
  - Track calories, macronutrients, and micronutrients
  - Support for multiple measurement units

- **Exercise Management**
  - Log various types of exercises
  - Track duration and calories burned
  - Weekly activity summaries

- **Water Intake Monitoring**
  - Track daily water consumption
  - Visual serving size guide
  - Custom measurement units (ml/l)

- **Health Condition Support**
  - Tailored recommendations for various health conditions:
    - Heart disease
    - Thyroid gland disorders
    - Lactose intolerance
    - Celiac disease
    - Hypertension
    - Diabetes
    - Kidney disease

- **User Profile & Customization**
  - Personal data management
  - Custom dietary goals
  - Progress tracking

- **Additional Features**
  - Multi-language support (English/Lithuanian)
  - Dark/Light theme
  - Secure authentication
  - Recipe recommendations

## Tech Stack

- **Frontend Framework**: React Native
- **Development Platform**: Expo
- **Authentication & Database**: Supabase
- **State Management**: React Context
- **Styling**: TailwindCSS (NativeWind)
- **Form Validation**: Yup
- **Charts & Visualization**: Recharts
- **Icons**: Lucide React
- **Internationalization**: i18next

## Getting Started

### Prerequisites

- Node.js (20.11.1 or later)
- Yarn package manager
- Expo CLI
- Docker (optional, for containerized development)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd food-app
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn start
```

### Docker Setup

Alternatively, you can run the application using Docker:

1. Build and start the container:
```bash
docker compose up --build
```

2. For hot-reloading during development:
```bash
docker compose watch
```

The application will be available at http://localhost:8081.

## Environment Setup

The application requires the following environment variables:

- Supabase configuration
- API keys for external services (e.g., recipe API)

Create a `.env` file in the root directory and add the necessary environment variables.