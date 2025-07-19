import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

function createPrettierIgnore() {
  const templatePath = join(__dirname, '..', '.prettierignore.template')
  const targetPath = join(process.cwd(), '.prettierignore')

  try {
    const template = readFileSync(templatePath, 'utf8')
    writeFileSync(targetPath, template)
    console.log('File .prettierignore successfully created')
  } catch (error) {
    console.error('Error while creating .prettierignore:', error)
  }
}

createPrettierIgnore()
