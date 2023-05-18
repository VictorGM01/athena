exports.listaNotas = function(application, req, res) {
    // cria conexão com o modelo /src/models/notaModels.js
    var notas = new application.src.models.notaModels() 

    // verifica se o id do aluno foi informado
    if(req.query.idAluno == undefined || req.query.idAluno == ''){
        res.json({message: 'id do aluno não informado'})
    } else{
        // código para evitar SQL Injection
        // converte o id do aluno para inteiro
        req.query.idAluno = parseInt(req.query.idAluno)
        // verifica se o id do aluno é um número, se não for, retorna mensagem de erro
        if(isNaN(req.query.idAluno)){
            res.json({message: 'id do aluno inválido'})
        } else{
            // chama modelo que lista os blocos de questões
            notas.getNotas((result) => {
                // verifica se o resultado da consulta é vazio. 
                // Se for, retorna mensagem de erro (result), se não, retorna os blocos de questões (result)
                if(result == undefined){
                    res.json({message: result})
                } else{
                    res.json(result)
                }
            }, req.query.idAluno);
        }
    }
}

exports.cadastra = function(application, req, res) {
    // cria conexão com o modelo /src/models/notaModels.js
    var notas = new application.src.models.notaModels()

    // código para evitar SQL Injection
    // converte o id do aluno para inteiro
    req.body.idAluno = parseInt(req.body.idAluno)
    // verifica se o id do aluno é um número, se não for, retorna mensagem de erro
    if(isNaN(req.body.idAluno)){
        res.json({message: 'id do aluno inválido'})
    } else {
        // converte o id da avaliação para inteiro
        req.body.idAvaliacao = parseInt(req.body.idAvaliacao)
        // verifica se o id da avaliação é um número, se não for, retorna mensagem de erro
        if(isNaN(req.body.idAvaliacao)){
            res.json({message: 'id da avaliação inválido'})
        } else {
            // converte o número de blocos para inteiro
            req.body.numBloco = parseInt(req.body.numBloco)
            // verifica se o número de blocos é um número, se não for, retorna mensagem de erro
            if(isNaN(req.body.numBloco)){
                res.json({message: 'número de blocos inválido'})
            } else {
                // converte a nota de acertos para inteiro
                req.body.notaAcertos = parseInt(req.body.notaAcertos)
                // verifica se a nota de acertos é um número, se não for, retorna mensagem de erro
                if(isNaN(req.body.notaAcertos)){
                    res.json({message: 'nota de acertos inválida'})
                } else {
                    // chama modelo que cadastra a nota
                    notas.postNota((result) => {
                        // verifica se o resultado da consulta é vazio. 
                        // Se for, retorna mensagem de sucesso, se não, retorna mensagem de erro (result)
                        if(result != undefined){
                            res.json({message: result})
                        } else{
                            res.json({message: 'nota cadastrada com sucesso'})
                        }
                    }, req.body.idAluno, req.body.idAvaliacao, req.body.numBloco, req.body.notaAcertos)
                }
            }
        }
    }
}

exports.atualiza = function(application, req, res) {
    // cria conexão com o modelo /src/models/notaModels.js
    var notas = new application.src.models.notaModels()

    // código para evitar SQL Injection
    // converte o id do aluno para inteiro
    req.body.idAluno = parseInt(req.body.idAluno)
    // verifica se o id do aluno é um número, se não for, retorna mensagem de erro
    if(isNaN(req.body.idAluno)){
        res.json({message: 'id do aluno inválido'})
    } else {
        // converte o id da avaliação para inteiro
        req.body.idAvaliacao = parseInt(req.body.idAvaliacao)
        // verifica se o id da avaliação é um número, se não for, retorna mensagem de erro
        if(isNaN(req.body.idAvaliacao)){
            res.json({message: 'id da avaliação inválido'})
        } else {
            // converte o número de blocos para inteiro
            req.body.numBloco = parseInt(req.body.numBloco)
            // verifica se o número de blocos é um número, se não for, retorna mensagem de erro
            if(isNaN(req.body.numBloco)){
                res.json({message: 'número de blocos inválido'})
            } else {
                // converte a nota de acertos para inteiro
                req.body.notaAcertos = parseInt(req.body.notaAcertos)
                // verifica se a nota de acertos é um número, se não for, retorna mensagem de erro
                if(isNaN(req.body.notaAcertos)){
                    res.json({message: 'nota de acertos inválida'})
                } else {
                    // chama modelo que atualiza a nota
                    notas.updateNota((result) => {
                        // verifica se o resultado da consulta é vazio. 
                        // Se for, retorna mensagem de sucesso, se não, retorna mensagem de erro (result)
                        if(result != undefined){
                            res.json({message: result})
                        } else{
                            res.json({message: 'nota atualizada com sucesso'})
                        }
                    }, req.body.idAluno, req.body.idAvaliacao, req.body.numBloco, req.body.notaAcertos)
                }
            }
        }
    }
}

exports.deleta = function(application, req, res) {
    // cria conexão com o modelo /src/models/notaModels.js
    var notas = new application.src.models.notaModels()

    // código para evitar SQL Injection
    // converte o id do aluno para inteiro
    req.query.idAluno = parseInt(req.query.idAluno)
    // verifica se o id do aluno é um número, se não for, retorna mensagem de erro
    if(isNaN(req.query.idAluno)){
        res.json({message: 'id do aluno inválido'})
    } else {
        // converte o id da avaliação para inteiro
        req.query.idAvaliacao = parseInt(req.query.idAvaliacao)
        // verifica se o id da avaliação é um número, se não for, retorna mensagem de erro
        if(isNaN(req.query.idAvaliacao)){
            res.json({message: 'id da avaliação inválido'})
        } else {
            // converte o número de blocos para inteiro
            req.query.numBloco = parseInt(req.query.numBloco)
            // verifica se o número de blocos é um número, se não for, retorna mensagem de erro
            if(isNaN(req.query.numBloco)){
                res.json({message: 'número de blocos inválido'})
            } else {
                // chama o modelo que deleta a nota
                notas.deleteNota((result) => {
                    // verifica se o resultado da consulta é vazio. 
                    // Se for, retorna mensagem de sucesso, se não, retorna mensagem de erro (result)
                    if(result != undefined){
                        res.json({message: result})
                    } else{
                        res.json({message: 'nota deletada com sucesso'})
                    }
                }, req.query.idAluno, req.query.idAvaliacao, req.query.numBloco)
            }
        }
    }
}