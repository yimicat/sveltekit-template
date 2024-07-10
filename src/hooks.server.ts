/**
 *
 * @author Yimi by yimicat.com
 * @date 2023-03-10 10:42
 */

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  console.log('hooks.server.handle-event.route:', event.route)
  return await resolve(event)
}
