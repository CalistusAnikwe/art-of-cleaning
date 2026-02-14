import { type SchemaTypeDefinition } from 'sanity'
import { homeType } from './home' // The schema we created earlier
import { navbar } from './navbar'
import { footer } from './footer'
import { about } from './about'
import { services } from './services'
import { contact } from './contact'
import { schedule } from './schedule'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeType, navbar, footer, about, services, contact, schedule],
}