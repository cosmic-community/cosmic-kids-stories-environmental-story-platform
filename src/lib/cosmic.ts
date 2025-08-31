import { createBucketClient } from '@cosmicjs/sdk';
import type { Story, AgeGroup, EcoTheme } from '../types';

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.COSMIC_READ_KEY,
  writeKey: import.meta.env.COSMIC_WRITE_KEY,
});

// Error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get all stories with connected objects
export async function getAllStories(): Promise<Story[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'stories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const stories = (response.objects as Story[]).sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateB - dateA; // Newest first
    });
    
    return stories;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch stories');
  }
}

// Get single story by slug
export async function getStoryBySlug(slug: string): Promise<Story | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'stories',
        slug: slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as Story;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch story: ${slug}`);
  }
}

// Get all age groups
export async function getAllAgeGroups(): Promise<AgeGroup[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'age-groups' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as AgeGroup[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch age groups');
  }
}

// Get all eco themes
export async function getAllEcoThemes(): Promise<EcoTheme[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'eco-themes' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as EcoTheme[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch eco themes');
  }
}

// Get stories by age group
export async function getStoriesByAgeGroup(ageGroupId: string): Promise<Story[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'stories',
        'metadata.age_group': ageGroupId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Story[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch stories by age group');
  }
}

// Get stories by eco theme
export async function getStoriesByEcoTheme(ecoThemeId: string): Promise<Story[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'stories',
        'metadata.eco_theme': ecoThemeId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Story[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch stories by eco theme');
  }
}