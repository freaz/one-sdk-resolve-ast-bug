import { SuperfaceClient } from '@superfaceai/one-sdk'
import superJson from '../../superface/superface/super.json';

async function main() {
  const client = new SuperfaceClient({
    superJson,
  });

  const profile = await client.getProfile('scope/name');
  const result = await profile.getUseCase('Name').perform();

  console.log(result.unwrap());
}

void main();