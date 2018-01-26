import 'babel-polyfill'

System.import('./app')
    .then(App => App.bootstrap())
