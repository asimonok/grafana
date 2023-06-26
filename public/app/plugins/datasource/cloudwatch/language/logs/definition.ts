import { LanguageDefinition } from '../monarch/register';

export const LANGUAGE_DEFINITION_ID = 'cloudwatch-logs';

const cloudWatchLogsLanguageDefinition: LanguageDefinition = {
  id: LANGUAGE_DEFINITION_ID,
  extensions: [],
  aliases: [],
  mimetypes: [],
  loader: () => import('./language'),
};
export default cloudWatchLogsLanguageDefinition;
