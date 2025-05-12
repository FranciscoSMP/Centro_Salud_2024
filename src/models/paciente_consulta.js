const pool = require('../keys');

const guardarEnBaseDatos = async (querySQLServer) => {
    return ejecutarSQLServer(querySQLServer);
};

const ejecutarSQLServer = async (query) => {
    const conSQL = await pool.poolPromise;
    return conSQL.request().query(query);
};

exports.addPacienteConsulta = async ({ DPI_Paciente, Id_Consulta }) => {
    const query = `INSERT INTO Paciente_Consulta (DPI_Paciente, Id_Consulta) 
    VALUES ('${DPI_Paciente}', ${Id_Consulta})`;
    await guardarEnBaseDatos(query);
};

exports.getPacienteConsulta = async () => {
    const conSQL = await pool.poolPromise;
    const result = await conSQL.request().query(`
        SELECT 
        Paciente_Consulta.Paciente_Consulta, 
        Paciente_Consulta.DPI_Paciente,
        Tipo_Consulta.Tipo_Consulta
        FROM Paciente_Consulta
        JOIN Tipo_Consulta ON Paciente_Consulta.Id_Consulta = Tipo_Consulta.Id_Consulta
    `);
    return result.recordset;
};

exports.updatePacienteConsulta = async ({ Paciente_Consulta, DPI_Paciente, Id_Consulta }) => {
    const query = `
        UPDATE Paciente_Consulta
        SET DPI_Paciente = '${DPI_Paciente}',
        Id_Consulta = ${Id_Consulta}
        WHERE Paciente_Consulta = ${Paciente_Consulta}`;
    await guardarEnBaseDatos(query);
};  

exports.getPacienteConsultaById = async (id) => {
    const conSQL = await pool.poolPromise;
    const result = await conSQL.request().query(`SELECT * FROM Paciente_Consulta WHERE Paciente_Consulta = ${id}`);
    return result.recordset[0];
}; 
 
exports.deletePacienteConsulta  = async (id) => {
    const query = `DELETE FROM Paciente_Consulta WHERE Paciente_Consulta = ${id}`;
    await guardarEnBaseDatos(query);
};