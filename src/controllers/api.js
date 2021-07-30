module.exports = class API{

    static calcularPI(req, res){
        if (!isNaN(req.query.random_limit)) {
            let limiteSuperior = Math.floor(req.query.random_limit);
            let limiteInferior = Math.ceil(limiteSuperior / 2);
            let aleatorio = Math.floor(
            Math.random() * (limiteSuperior - limiteInferior + 1) +
                limiteInferior
            );
            let piCalc = Math.PI.toFixed(aleatorio);
            res.json({ PiCalc: piCalc });
        }else{
            res.status(500).json({ error: "No se recibió el valor del Limite superior" });
        }

    }
}