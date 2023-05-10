import { type SchemaTypeDefinition } from 'sanity';
import { project, technology } from './lib/schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    technology,
    project,
  ],
};
