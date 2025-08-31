// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Age Group interface
export interface AgeGroup extends CosmicObject {
  type: 'age-groups';
  metadata: {
    age_range?: string;
    reading_level?: {
      key: string;
      value: 'Beginner' | 'Intermediate' | 'Advanced';
    };
    description?: string;
  };
}

// Eco Theme interface
export interface EcoTheme extends CosmicObject {
  type: 'eco-themes';
  metadata: {
    theme_name?: string;
    description?: string;
    theme_icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Story interface
export interface Story extends CosmicObject {
  type: 'stories';
  metadata: {
    story_title?: string;
    story_content?: string;
    age_group?: AgeGroup;
    eco_theme?: EcoTheme;
    featured_illustration?: {
      url: string;
      imgix_url: string;
    };
    reading_time?: string;
    moral_lesson?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isStory(obj: CosmicObject): obj is Story {
  return obj.type === 'stories';
}

export function isAgeGroup(obj: CosmicObject): obj is AgeGroup {
  return obj.type === 'age-groups';
}

export function isEcoTheme(obj: CosmicObject): obj is EcoTheme {
  return obj.type === 'eco-themes';
}