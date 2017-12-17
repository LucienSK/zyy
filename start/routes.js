'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.on('/').render('home')
Route.on('welcome').render('welcome')
Route.on('home').render('home')
Route.any('index', ({ view }) => view.render('index'))
Route.any('course', ({ view }) => view.render('course'))
Route.any('courseinfo', ({ view }) => view.render('courseinfo'))
Route.any('mine', ({ view }) => view.render('mine'))
Route.get('index/:id', async ({ params }) => {
  const post = await Post.find(params.id)
  return post
})



Route.any('*', ({ view }) => view.render('welcome'))
