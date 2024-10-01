const consultaModel = require('../models/consulta');
const { format } = require('date-fns');

const renderView = (view) => (req, res) => {
    res.render(view);
};

const guardarDatos = (model, redirect) => async (req, res) => {
    try {
        await model(req.body); 
        res.redirect(redirect);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Error al guardar ${redirect.slice(7)}`);
    }
};

exports.consulta = renderView('add/consulta');

exports.addConsulta = guardarDatos(consultaModel.addConsulta, '/consulta/table');

exports.getConsulta = async (req, res) => {
    try {
        const consultas = await consultaModel.getConsulta();
        const consultasFormateadas = consultas.map(consulta => {
            return {
                ...consulta,
                Fecha_Consulta: format(new Date(consulta.Fecha_Consulta), 'dd/MM/yyyy')
            };
        });
        res.render('consulta_table', { consultas: consultasFormateadas });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener consultas');
    }
};

// exports.updateConsulta = async (req, res) => {
//     try {
//         await consultaModel.updateConsulta(req.body);
//         res.redirect('/consulta/table');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error al actualizar la consulta');
//     }
// };

exports.updateConsulta = async (req, res) => {
    try {
        // Obtén la fecha del cuerpo de la solicitud
        const fechaConsulta = new Date(req.body.Fecha_Consulta + 'T00:00:00'); // Usa T00:00:00 para asegurar que la hora es a medianoche

        // Ajusta la fecha a UTC sumando 6 horas
        const fechaUTC = new Date(fechaConsulta.getTime() + (6 * 60 * 60 * 1000)).toISOString(); // Suma 6 horas en milisegundos

        await consultaModel.updateConsulta({
            ...req.body,
            Fecha_Consulta: fechaUTC // Usa la fecha ajustada en UTC
        });
        res.redirect('/consulta/table');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar la consulta');
    }
};

// exports.getConsultaById = async (req, res) => {
//     try {
//         const consulta = await consultaModel.getConsultaById(req.params.id);
//         res.render('consulta_update', { consulta });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error al obtener la consulta');
//     }
// };

exports.getConsultaById = async (req, res) => {
    try {
        const consulta = await consultaModel.getConsultaById(req.params.id);
        // Cambia el formato de la fecha aquí
        const formattedConsulta = {
            ...consulta,
            Fecha_Consulta: format(new Date(consulta.Fecha_Consulta), 'yyyy-MM-dd') // Cambia a 'yyyy-MM-dd'
        };
        res.render('consulta_update', { consulta: formattedConsulta });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la consulta');
    }
};
