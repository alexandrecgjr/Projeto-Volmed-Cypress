import { AppDataSource } from './data-source.js'
import { Clinica } from './clinicas/clinicaEntity.js'
import { Endereco } from './enderecos/enderecoEntity.js'
import { encryptPassword } from './utils/senhaUtils.js'
import { Role } from './auth/roles.js'

async function seed() {
  await AppDataSource.initialize()
  console.log('Database initialized')

  const endereco = new Endereco()
  endereco.cep = 12345678
  endereco.rua = 'Rua Teste'
  endereco.numero = 123
  endereco.complemento = 'Apt 1'
  endereco.estado = 'SP'

  await AppDataSource.manager.save(Endereco, endereco)

  const clinica = new Clinica()
  clinica.nome = 'Clinica Teste'
  clinica.email = 'clinica@teste.com'
  clinica.senha = encryptPassword('4321')
  clinica.role = Role.clinica
  clinica.endereco = endereco
  clinica.planoDeSaudeAceitos = ['1']

  await AppDataSource.manager.save(Clinica, clinica)

  console.log('Clinica seeded')
  process.exit(0)
}

seed().catch(console.error)