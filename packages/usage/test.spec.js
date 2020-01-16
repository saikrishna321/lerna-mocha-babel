import { Beta } from 'beta-lerna';
import { add } from 'alpha';
it('Test to add', async () => {
  const beta = new Beta();
  const sum = await beta.add(2, 2);
  console.log(`${add()}`, sum);
});
