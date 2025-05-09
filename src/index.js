const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

const app = express();
require('./lib/passport')(passport);

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); 
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'), 
    extname: '.hbs',
    helpers: require('./lib/helpers')
}));
app.set('view engine', '.hbs');

app.use(session({
    secret: 'sqlnodesession',
    resave: true,
    saveUninitialized: true,
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

app.use(require('./routes/index'));
app.use('/departamento', require('./routes/departamento'));
app.use('/municipio', require('./routes/municipio'));
app.use('/pueblo', require('./routes/pueblo'));
app.use('/discapacidad', require('./routes/discapacidad'));
app.use('/profesion', require('./routes/profesion'));
app.use('/comunidad_linguistica', require('./routes/comunidad_linguistica'));
app.use('/escolaridad', require('./routes/escolaridad'));
app.use('/paciente', require('./routes/paciente'));
app.use('/tipo_consulta', require('./routes/tipo_consulta'));
app.use('/enfermero', require('./routes/enfermero'));
app.use('/paciente_consulta', require('./routes/pacienteConsulta'));
    
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});
