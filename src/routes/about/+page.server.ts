/**
 *
 * @author Yimi by yimicat.com
 * @date 2023-03-09 18:41
 */

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
  return {
    test: 'this is DB data.'
  }
}
