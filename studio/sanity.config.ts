import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import {deskStructure} from "./component/deskStructure"

import {muxInput} from 'sanity-plugin-mux-input'

import { seoMetaFields } from "sanity-plugin-seo";

export default defineConfig({
  name: 'default',
  title: 'vertio',

  projectId: '9rlevipl',
  dataset: 'production',

  plugins: [structureTool({structure: deskStructure}), visionTool(), seoMetaFields(), muxInput()],

  schema: {
    types: schemaTypes,
  },
})
