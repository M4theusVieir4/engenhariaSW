<template>
    <!-- Calendário Padrão-->
    <div class="demanda">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light-lighten p-2 mb-0">
                <li class="breadcrumb-item"><a href="./"><i class="uil-home-alt"></i>Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Demanda Logística</li>
            </ol>
        </nav>
        <div class="row">
            <div class="col-md-12 mb-3 mt-3">
                <!-- Título Pág -->
                <h2 class="card-title mb-0">Demanda Logistica</h2>
            </div>
            <!-- end col e Título Pág -->
        </div>

        <div class="row">
            <div class="col-xl-5">
                <div class="card" style="position: -webkit-sticky; position: sticky; top: 0;">

                    <div class="card-body">
                        <h4 class="d-flex align-items-center gap-2 mt-0 mb-2 header-title h4"><i
                                class="mdi mdi-calendar-account font-24 text-brown"></i>Demandas do dia</h4>
                        <div class="" id='calendar'>
                        </div>
                        <!-- end table responsive-->
                    </div>
                    <!-- end col-->
                </div>
                <!-- end Calendário Padrão-->
                <div class="row" style="position: -webkit-sticky; position: sticky; top: 720px;">
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <h4 class="header-title">25</h4>
                                <h4 class="header-title">Pendentes</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <h4 class="header-title">3</h4>
                                <h4 class="header-title">Atrasados</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <h4 class="header-title">28</h4>
                                <h4 class="header-title">Total</h4>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div class="col-xl-7">
                <!-- Lista de Agendamentos -->
                <div class="card styled-scroll">
                    <div class="d-flex card-header justify-content-between align-items-center">
                        <h4 class="header-title">Demandas</h4>
                    </div>

                    <div class="card-body pt-0" id="lista">
                        <div class="table-responsive">
                            <div class="inbox-item border-bottom border-muted mb-2">
                                <table class="table table-centered table-nowrap table-hover mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p class="text-brown text-bold fw-bold">
                                                    Data necessidade:
                                                    <span
                                                        class="badge badge-warning-lighten ml-2 font-6 text-lowercase">02/05/2023
                                                        13:19:10
                                                    </span>
                                                </p>
                                                <p class="inbox-item-text mb"><strong>Destino remessa:</strong> Técnico</p>
                                                <p class="inbox-item-text mb-3"><strong>Cliente:</strong> <a target="_blank"
                                                        href="Cliente.aspx?id=20210331163058">01 CARGO TRANSPORTES</a></p>
                                                <p class="inbox-item-text" id="954232"><strong>Ordem de Serviço:</strong> <a
                                                        target="_blank"
                                                        href="DashboardAgendamento/OrdemServico.aspx?id=954232">954232</a>
                                                </p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Proposta:</strong> 789123</p>
                                                <p class="inbox-item-text mb-3"><strong>Operação:</strong> Instalação</p>
                                                <p class="inbox-item-text"><strong>Produto:</strong> Imobilizador</p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Qtd. Serviços:</strong> 8</p>
                                                <p class="inbox-item-text mb-3"><strong>Localidade:</strong> Jundiaí / SP
                                                </p>
                                                <p class="inbox-item-text"><strong>kit BOM:</strong> 2211</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <p class="text-brown text-bold fw-bold mb-3">
                                                    Data necessidade:
                                                    <span
                                                        class="badge badge-warning-lighten ml-2 font-6 text-lowercase">05/05/2023
                                                        13:19:10
                                                    </span>
                                                </p>
                                                <p class="inbox-item-text mb"><strong>Destino remessa:</strong> Cliente</p>
                                                <p class="inbox-item-text mb-3"><strong>Cliente:</strong> <a target="_blank"
                                                        href="Clientes.aspx">ARTICO LOG LTDA</a></p>
                                                <p class="inbox-item-text" id="21825"><strong>Ordem de Serviço:</strong> <a
                                                        target="_blank"
                                                        href="DashboardAgendamento/Programacao.aspx?id=21825">21825</a></p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Proposta:</strong> 789123</p>
                                                <p class="inbox-item-text mb-3"><strong>Operação:</strong> Instalação</p>
                                                <p class="inbox-item-text"><strong>Produto:</strong> Imobilizador</p>
                                            </td>
                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Qtd. Serviços:</strong> 8</p>
                                                <p class="inbox-item-text mb-3"><strong>Localidade:</strong> Jundiaí / SP
                                                </p>
                                                <p class="inbox-item-text"><strong>kit BOM:</strong> 2211</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-brown text-bold fw-bold mb-3">
                                                    Data necessidade:
                                                    <span
                                                        class="badge badge-warning-lighten ml-2 font-6 text-lowercase">30/05/2023
                                                        13:19:10
                                                    </span>
                                                </p>
                                                <p class="inbox-item-text mb"><strong>Destino remessa:</strong> Cliente</p>
                                                <p class="inbox-item-text mb-3"><strong>Cliente:</strong> <a target="_blank"
                                                        href="Clientes.aspx">ARTICO LOG LTDA</a></p>
                                                <p class="inbox-item-text" id="23370"><strong>Programação:</strong> <a
                                                        target="_blank"
                                                        href="DashboardAgendamento/Programacao.aspx?id=23370">23370</a></p>
                                            </td>
                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Proposta:</strong> 789123</p>
                                                <p class="inbox-item-text mb-3"><strong>Operação:</strong> Instalação</p>
                                                <p class="inbox-item-text"><strong>Produto:</strong> Imobilizador</p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Qtd. Serviços:</strong> 8</p>
                                                <p class="inbox-item-text mb-3"><strong>Localidade:</strong> Jundiaí / SP
                                                </p>
                                                <p class="inbox-item-text"><strong>kit BOM:</strong> 2211</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-brown text-bold fw-bold mb-3">
                                                    Data necessidade:
                                                    <span
                                                        class="badge badge-warning-lighten ml-2 font-6 text-lowercase">21/05/2023
                                                        13:19:10
                                                    </span>
                                                </p>
                                                <p class="inbox-item-text mb"><strong>Destino remessa:</strong> Técnico</p>
                                                <p class="inbox-item-text mb-3"><strong>Cliente:</strong> <a target="_blank"
                                                        href="Clientes.aspx">MIRASSOL LOGISTICA LTDA - FILIAL</a></p>
                                                <p class="inbox-item-text" id="1055301"><strong>Ordem de Servico:</strong>
                                                    <a target="_blank"
                                                        href="DashboardAgendamento/OrdemServico.aspx?id=1055301">1055301</a>
                                                </p>
                                            </td>
                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Proposta:</strong> 789123</p>
                                                <p class="inbox-item-text mb-3"><strong>Operação:</strong> Instalação</p>
                                                <p class="inbox-item-text"><strong>Produto:</strong> SMART CARRETA</p>
                                            </td>
                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Qtd. Serviços:</strong> 8</p>
                                                <p class="inbox-item-text mb-3"><strong>Localidade:</strong> Macaé / SP</p>
                                                <p class="inbox-item-text"><strong>kit BOM:</strong> 2211</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-brown text-bold fw-bold mb-3">
                                                    Data necessidade:
                                                    <span
                                                        class="badge badge-warning-lighten ml-2 font-6 text-lowercase">20/05/2023
                                                        13:19:10
                                                    </span>
                                                </p>
                                                <p class="inbox-item-text mb"><strong>Destino remessa:</strong> Cliente</p>
                                                <p class="inbox-item-text mb-3"><strong>Cliente:</strong> <a target="_blank"
                                                        href="Clientes.aspx">MARGIL TRANSPORTES LTDA</a></p>
                                                <p class="inbox-item-text" id="22311"><strong>Programação:</strong> <a
                                                        target="_blank"
                                                        href="DashboardAgendamento/Programacao.aspx?id=22311">22311</a></p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Proposta:</strong> 789123</p>
                                                <p class="inbox-item-text mb-3"><strong>Operação:</strong> Instalação</p>
                                                <p class="inbox-item-text"><strong>Produto:</strong> Imobilizador</p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Qtd. Serviços:</strong> 8</p>
                                                <p class="inbox-item-text mb-3"><strong>Localidade:</strong> Jundiaí / SP
                                                </p>
                                                <p class="inbox-item-text"><strong>kit BOM:</strong> 2211</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-brown text-bold fw-bold">
                                                    Data necessidade:
                                                    <span
                                                        class="badge badge-warning-lighten ml-2 font-6 text-lowercase">02/05/2023
                                                        13:19:10
                                                    </span>
                                                </p>
                                                <p class="inbox-item-text mb"><strong>Destino remessa:</strong> Técnico</p>
                                                <p class="inbox-item-text mb-3"><strong>Cliente:</strong> <a target="_blank"
                                                        href="Cliente.aspx?id=20210331163058">01 CARGO TRANSPORTES</a></p>
                                                <p class="inbox-item-text" id=""><strong>Ordem de Serviço:</strong> <a
                                                        target="_blank"
                                                        href="DashboardAgendamento/OrdemServico.aspx?id=954232">954232</a>
                                                </p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Proposta:</strong> 789123</p>
                                                <p class="inbox-item-text mb-3"><strong>Operação:</strong> Instalação</p>
                                                <p class="inbox-item-text"><strong>Produto:</strong> Imobilizador</p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Qtd. Serviços:</strong> 8</p>
                                                <p class="inbox-item-text mb-3"><strong>Localidade:</strong> Jundiaí / SP
                                                </p>
                                                <p class="inbox-item-text"><strong>kit BOM:</strong> 2211</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-brown text-bold fw-bold">
                                                    Data necessidade:
                                                    <span
                                                        class="badge badge-warning-lighten ml-2 font-6 text-lowercase">02/05/2023
                                                        13:19:10
                                                    </span>
                                                </p>
                                                <p class="inbox-item-text mb"><strong>Destino remessa:</strong> Técnico</p>
                                                <p class="inbox-item-text mb-3"><strong>Cliente:</strong> <a target="_blank"
                                                        href="Cliente.aspx?id=20210331163058">01 CARGO TRANSPORTES</a></p>
                                                <p class="inbox-item-text" id=""><strong>Ordem de Serviço:</strong> <a
                                                        target="_blank"
                                                        href="DashboardAgendamento/OrdemServico.aspx?id=954232">954232</a>
                                                </p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Proposta:</strong> 789123</p>
                                                <p class="inbox-item-text mb-3"><strong>Operação:</strong> Instalação</p>
                                                <p class="inbox-item-text"><strong>Produto:</strong> Imobilizador</p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Qtd. Serviços:</strong> 8</p>
                                                <p class="inbox-item-text mb-3"><strong>Localidade:</strong> Jundiaí / SP
                                                </p>
                                                <p class="inbox-item-text"><strong>kit BOM:</strong> 2211</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-brown text-bold fw-bold">
                                                    Data necessidade:
                                                    <span
                                                        class="badge badge-warning-lighten ml-2 font-6 text-lowercase">02/05/2023
                                                        13:19:10
                                                    </span>
                                                </p>
                                                <p class="inbox-item-text mb"><strong>Destino remessa:</strong> Técnico</p>
                                                <p class="inbox-item-text mb-3"><strong>Cliente:</strong> <a target="_blank"
                                                        href="Cliente.aspx?id=20210331163058">01 CARGO TRANSPORTES</a></p>
                                                <p class="inbox-item-text" id=""><strong>Ordem de Serviço:</strong> <a
                                                        target="_blank"
                                                        href="DashboardAgendamento/OrdemServico.aspx?id=954232">954232</a>
                                                </p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Proposta:</strong> 789123</p>
                                                <p class="inbox-item-text mb-3"><strong>Operação:</strong> Instalação</p>
                                                <p class="inbox-item-text"><strong>Produto:</strong> Imobilizador</p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Qtd. Serviços:</strong> 8</p>
                                                <p class="inbox-item-text mb-3"><strong>Localidade:</strong> Jundiaí / SP
                                                </p>
                                                <p class="inbox-item-text"><strong>kit BOM:</strong> 2211</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-brown text-bold fw-bold">
                                                    Data necessidade:
                                                    <span
                                                        class="badge badge-warning-lighten ml-2 font-6 text-lowercase">02/05/2023
                                                        13:19:10
                                                    </span>
                                                </p>
                                                <p class="inbox-item-text mb"><strong>Destino remessa:</strong> Técnico</p>
                                                <p class="inbox-item-text mb-3"><strong>Cliente:</strong> <a target="_blank"
                                                        href="Cliente.aspx?id=20210331163058">01 CARGO TRANSPORTES</a></p>
                                                <p class="inbox-item-text" id=""><strong>Ordem de Serviço:</strong> <a
                                                        target="_blank"
                                                        href="DashboardAgendamento/OrdemServico.aspx?id=954232">954232</a>
                                                </p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Proposta:</strong> 789123</p>
                                                <p class="inbox-item-text mb-3"><strong>Operação:</strong> Instalação</p>
                                                <p class="inbox-item-text"><strong>Produto:</strong> Imobilizador</p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Qtd. Serviços:</strong> 8</p>
                                                <p class="inbox-item-text mb-3"><strong>Localidade:</strong> Jundiaí / SP
                                                </p>
                                                <p class="inbox-item-text"><strong>kit BOM:</strong> 2211</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-brown text-bold fw-bold">
                                                    Data necessidade:
                                                    <span
                                                        class="badge badge-warning-lighten ml-2 font-6 text-lowercase">02/05/2023
                                                        13:19:10
                                                    </span>
                                                </p>
                                                <p class="inbox-item-text mb"><strong>Destino remessa:</strong> Técnico</p>
                                                <p class="inbox-item-text mb-3"><strong>Cliente:</strong> <a target="_blank"
                                                        href="Cliente.aspx?id=20210331163058">01 CARGO TRANSPORTES</a></p>
                                                <p class="inbox-item-text" id=""><strong>Ordem de Serviço:</strong> <a
                                                        target="_blank" href="/programacao">954232</a>
                                                </p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Proposta:</strong> 789123</p>
                                                <p class="inbox-item-text mb-3"><strong>Operação:</strong> Instalação</p>
                                                <p class="inbox-item-text"><strong>Produto:</strong> Imobilizador</p>
                                            </td>

                                            <td>
                                                <p class="inbox-item-text mb-3"><strong>Qtd. Serviços:</strong> 8</p>
                                                <p class="inbox-item-text mb-3"><strong>Localidade:</strong> Jundiaí / SP
                                                </p>
                                                <p class="inbox-item-text"><strong>kit BOM:</strong> 2211</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <!-- end table-responsive-->
                    </div>
                    <!-- end card-body-->
                </div>
                <!-- end card-->

            </div>

        </div>
    </div>
</template>

<script>

import { Calendar } from '@fullcalendar/core'

import 'fullcalendar';


export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    mounted() {

        var defaultEvents = [{
            title: '<i class="fa-lg bi bi-send-check"></i>',
            start: "2023-05-02T06:00:00",
            end: "2023-05-02T10:00:00",
            className: 'bg-warning',
            extendedProps: { period: '', idProgramacao: 954232 }
        },
        {
            title: '<i class="fa-lg bi bi-send-check"></i>>',
            start: "2023-05-05T06:00:00",
            end: "2023-05-05T10:00:00",
            className: 'bg-warning',
            extendedProps: { period: '', idProgramacao: 6739014 }
        },

        {
            title: '<i class="fa-lg bi bi-send-check"></i>',
            start: "2023-05-20T06:00:00",
            end: "2023-05-20T10:00:00",
            className: 'bg-warning',
            extendedProps: { period: '', idProgramacao: 22311 }
        },
        {
            title: '<i class="fa-lg bi bi-send-check"></i>',
            start: "2023-05-30T06:00:00",
            end: "2023-05-30T10:00:00",
            className: 'bg-warning',
            extendedProps: { period: '', idProgramacao: 23370 }
        },
        {
            title: '<i class="fa-lg bi bi-send-check"></i>',
            start: "2023-05-21T06:00:00",
            end: "2023-05-21T10:00:00",
            className: 'bg-warning',
            extendedProps: { period: '', idProgramacao: 1055301 }
        },

        ]
        var calendarEl = document.getElementById('calendar');
        var calendar = new Calendar(calendarEl, {

            height: 600,
            width: 600,
            initialView: 'dayGridMonth',
            locale: 'pt-br',
            initialEvents: defaultEvents,
            eventContent: function (arg) {
                if (arg.event._def.ui.display != "background") {
                    let spanEl = document.createElement('strong')
                    spanEl.innerHTML = `<a class="p-4" target="_self" href="#${arg.event.extendedProps.idProgramacao}">${arg.event.title}</a>`
                    spanEl.style.padding = "3px";
                    spanEl.style.overflow = "hidden"

                    let arrayOfDomNodes = [spanEl]
                    return { domNodes: arrayOfDomNodes }
                }
            },

        });
        calendar.render();
    }
}
</script>