import { SuperfaceClient } from '@superfaceai/one-sdk'

async function main() {
  const client = new SuperfaceClient();

  const profile = await client.getProfile('scope/name');
  const result = await profile.getUseCase('Name').perform();

  console.log(result.unwrap());
}

void main();