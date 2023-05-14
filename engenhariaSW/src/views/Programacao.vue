<template>
    <div class="programacao">
        <!-- Personal-Information -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light-lighten p-2 mb-0">
                <li class="breadcrumb-item"><a href="../Home.aspx"><i class="uil-home-alt"></i> Home</a></li>
                <li class="breadcrumb-item"><a href="./ConfirmacaoProgramacao.aspx">Programações</a></li>
                <li class="breadcrumb-item active" aria-current="page">Programação</li>
            </ol>
        </nav>
        <div class="row">
            <div class="col-sm-12">
                <!-- PROFILE -->
                <div class="card bg-brown">
                    <div class="card-body profile-user-box">
                        <div class="row">
                            <div class="col-auto align-self-center">
                                <div class="avatar-lg text-center" style="height: unset;">
                                    <h4 class="mb-2"><span class="badge text-wrap text-lowercase" id="lblStatusHeader">Não
                                            Iniciada</span></h4>
                                    <img style="max-width:70%;  border-radius: 10px; opacity: 0.9"
                                        src="../Figuras/icones/icone_programacao.png" />
                                </div>
                            </div>
                            <div class="col">
                                <h4 class="mt-1 mb-1 text-white" id="lblTituloHeader">PROGRAMAÇÃO 00000</h4>
                                <p class="text-white-50">
                                    <strong><i class="ri-building-2-line mr-1"></i></strong>
                                    <span><a target="_blank" href="#" id="lblClienteHeader"
                                            class="text-white-50">...</a></span>
                                </p>
                                <div class="row">
                                    <div class="col-auto" style="min-width: 260px">
                                        <p class="text-white-50">Tipo: <span class="text-white"
                                                id="lblTipoHeader">...</span>
                                        </p>
                                        <p class="text-white-50">Operação: <span class="text-white"
                                                id="lblOperacaoHeader">...</span></p>
                                        <p class="text-white-50">Produto: <span class="text-white"
                                                id="lblProdutoHeader">...</span></p>
                                    </div>
                                    <div class="col-auto" style="max-width: 400px">
                                        <div class="mt-sm-0 text-sm-start">
                                            <ul class="mb-0 list-inline text-light">
                                                <li class="list-inline-item me-3">
                                                    <h5 class="mb-1 text-white" id="lblPloomesHeader">...</h5>
                                                    <p class="mb-0 font-13 text-white-50">Proposta Ploomes</p>
                                                </li>
                                                <li class="list-inline-item me-3">
                                                    <h5 class="mb-1 text-white" id="lblQtdePorPeriodo">...</h5>
                                                    <p class="mb-0 font-13 text-white-50">Qtde. Por Período</p>
                                                </li>
                                                <li class="list-inline-item me-3">
                                                    <h5 class="mb-1 text-white" id="lblQtdeTotal">...</h5>
                                                    <p class="mb-0 font-13 text-white-50"> Qtde. Total</p>
                                                </li>
                                                <li class="list-inline-item me-3 d-flex mt-2">
                                                    <h5 class="mb-1 text-white">
                                                        <span id="lblDataInicioHeader">...</span>
                                                        <span class="d-inline-block mx-1">a</span>
                                                        <span id="lblDataFimHeader">...</span>
                                                    </h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <p class="text-white-50">Descrição: <span class="text-white"
                                            id="lblDescricaoHeader">...</span></p>
                                </div>
                            </div>
                        </div> <!--end row -->
                    </div> <!-- end card-body -->
                </div><!--end card -->
            </div> <!-- end col-sm-2 -->
        </div> <!--end row -->

        <div class="row">
            <div class="col-xl-4">
                <!-- DADOS DO SOLICITANTE -->
                <div class="card">
                    <div class="card-body">
                        <span class=" d-flex align-items-center gap-2 mt-0 mb-3 header-title h4"><i
                                class="ri-user-3-line font-20 text-brown"></i> Dados do Solicitante</span>

                        <div class="text-start">
                            <p class="text-muted ml-2">
                                <strong>Cliente: </strong>
                                <span class="ms-2"><a target="_blank" href="#" id="lblClienteSolicitante">...</a></span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Temperatura do Cliente: </strong>
                                <span class="ms-2 badge text-lowercase" id="lblClienteTempSolicitante">...</span>
                            </p>
                            <p class="text-muted ml-2 border-bottom pb-3">
                                <strong>Associação: </strong>
                                <span class="ms-2" id="lblClienteAssociacaoSolicitante">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Solicitante: </strong>
                                <span class="ms-2" id="lblNomeSolicitante">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Telefone: </strong>
                                <span class="ms-2" id="lblTelefoneSolicitante">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Email: </strong>
                                <span class="ms-2" id="lblEmailSolicitante">...</span>
                            </p>
                            <p class="text-muted ml-2 border-bottom pb-3">
                                <strong>Cargo: </strong>
                                <span class="ms-2" id="lblCargoSolicitante">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Observação: </strong>
                                <span class="ms-2" id="lblObservacaoProgramacao">...</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- ENDEREÇO DE INSTALAÇÃO -->
                <div class="card">
                    <div class="card-body">
                        <span class="d-flex align-items-center gap-2 header-title mb-3 h4"><i
                                class="ri-map-pin-2-line font-20 text-brown"></i> Endereço Instalação</span>

                        <div class="text-start">
                            <p class="text-muted ml-2">
                                <strong>Local Conhecido: </strong>
                                <span class="ms-2" id="lblLocalConhecidoEndereco">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>CEP: </strong>
                                <span class="ms-2" id="lblCepEndereco">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Endereço: </strong>
                                <span class="ms-2" id="lblLogradouroEndereco">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Complemento: </strong>
                                <span class="ms-2" id="lblComplementoEndereco">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Referência: </strong>
                                <span class="ms-2" id="lblReferenciaEndereco">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Bairro: </strong>
                                <span class="ms-2" id="lblBairroEndereco">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Cidade: </strong>
                                <span class="ms-2" id="lblCidadeEndereco">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Lat: </strong>
                                <span class="ms-2 " id="lblLatEndereco">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Long: </strong>
                                <span class="ms-2 " id="lblLongEndereco">...</span>
                            </p>
                            <p class="text-muted ml-2">
                                <strong>Observação: </strong>
                                <span class="ms-2" id="lblObservacaoEndereco">...</span>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- TESTES -->
                <div class="card">
                    <div class="card-body">
                        <span class="d-flex align-items-center gap-2 header-title h4 mt-0 mb-3 "><i
                                class="ri-survey-line font-20 text-brown"></i> Testes</span>
                        <div class="inbox-item  border-muted mb-2 p-3" id="cardTestes">... </div>
                    </div>
                </div>
            </div><!-- end col 1-->

            <div class="col-xl-8">
                <!--SERVIÇOS-->
                <div class="card">
                    <div class="card-body">
                        <span class="header-title d-flex align-items-center gap-2 h4 mb-3 mt-0"><i
                                class="ri-survey-line font-24 text-brown"></i><strong> SERVIÇOS</strong></span>
                        <ol class="list-group list-group" id="cardServicos">
                            <li style="list-style: none;">...</li>
                        </ol>
                    </div>
                </div>

                <!-- CALENDÁRIO + TÉCNICO -->
                <div class="card">
                    <div class="card-body">
                        <span class="header-title d-flex align-items-center gap-2 h4 mb-3 mt-0"><i
                                class="mdi mdi-calendar-account font-24 text-brown"></i><strong> Calendário +
                                Técnico</strong></span>
                        <div class="accordion" id="cardCalendarioTecnico">...</div>
                    </div>
                </div>

                <!-- ORDENS DE SERVIÇOS  -->
                <div class="card">
                    <div class="card-body">
                        <span class="header-title d-flex align-items-center gap-2 h4 mb-3"><i
                                class="ri-tools-line font-20 text-brown"></i> Ordens de Serviço</span>
                        <div class="d-none mb-3">
                            <input type="text" placeholder="pesquisar..." class="form-control" />
                            <a href="javascript: void(0);" class="btn btn-primary ms-1"><i
                                    class="mdi mdi-filter-variant"></i></a>
                        </div>
                        <div class="inbox-widget styled-scroll p-2" style="max-height: 800px; overflow-y: auto"
                            id="cardsOS">
                            ...
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h4 class="d-flex align-items-center gap-2 mt-0 mb-3 header-title h4"><i
                                class="ri-archive-line font-20 text-brown"></i>(EM CONSTRUÇÃO)</h4>
                        <div class="d-none mb-3">
                            <input type="text" placeholder="pesquisar..." class="form-control" />
                            <a href="javascript: void(0);" class="btn btn-primary ms-1"><i
                                    class="mdi mdi-filter-variant"></i></a>
                        </div>

                        <div class="inbox-widget styled-scroll p-2" style="max-height: 400px; overflow-y: auto"
                            id="cardsRemessaMateriais">
                            <div class="inbox-item border-bottom border-muted mb-2">
                                <p class="text-brown text-bold fw-bold mb-1">
                                    736698
                                    <span class="badge badge-primary-lighten ml-2 font-6 text-lowercase"
                                        id="statusOrdemServico">Separado</span>
                                </p>
                                <p class="inbox-item-text"><strong>Destino: </strong>Barueri - SP</p>
                                <p class="inbox-item-text"><strong>Modalidade: </strong>Transportadora</p>
                                <p class="inbox-item-text"><strong>Operador: </strong>Jadlog</p>
                                <p class="inbox-item-text"><strong>Envio: </strong>10/05/2023</p>
                                <p class="inbox-item-text"><strong>Previsão de entrega: </strong>14/05/2023</p>
                                <p class="inbox-item-date">
                                    <a class="text-brown font-13">Abrir</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>