<template>
    <div class="fila">
        <div class="row">
            <div class="col-xl-6">
                <h2>Fila de Agendamento</h2>
            </div>

            <div class="col-xl-6 d-flex gap-2 align-items-center mt-2 mt-lg-0">
                <div class="card widget-flat mb-0 align-self-stretch" style="width: 20%">
                    <div class="card-body p-2 text-center text-bg-primary">
                        <h5 class="fw-normal mt-0" title="Growth">Pendente</h5>
                        <h3 class="mt-2" id="indicadorGeralProgramadas">3</h3>
                    </div>
                </div>
                <div class="card widget-flat mb-0 align-self-stretch" style="width: 20%">
                    <div class="card-body p-2 text-center text-bg-info">
                        <h5 class="fw-normal mt-0" title="Growth">Em contato</h5>
                        <h3 class="mt-2" id="indicadorGeralConcluidas">3</h3>
                    </div>
                </div>
                <div class="card widget-flat mb-0 align-self-stretch" style="width: 20%">
                    <div class="card-body p-2 text-center text-bg-danger">
                        <h5 class="fw-normal mt-0" title="Growth">Em agendamento</h5>
                        <h3 class="mt-2" id="indicadorGeralFrustradas">3</h3>
                    </div>
                </div>
                <div class="card widget-flat mb-0 align-self-stretch" style="width: 20%">
                    <div class="card-body p-2 text-center text-bg-warning">
                        <h5 class="fw-normal mt-0" title="Growth">Agendado</h5>
                        <h3 class="mt-2" id="indicadorGeralNoShow">3</h3>
                    </div>
                </div>
                <div class="card widget-flat mb-0 align-self-stretch" style="width: 20%">
                    <div class="card-body p-2 text-center text-bg-success">
                        <h5 class="fw-normal mt-0" title="Growth">Em instalação</h5>
                        <h3 class="mt-2" id="indicadorGeralPendentes">3</h3>
                    </div>
                </div>
            </div>

        </div>

        <div class="row mt-3">
            <div class="col-12">
                <div class="board">


                    <!--LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA-->
                    <div class="tasks" data-plugin="dragula"
                        data-containers='["task-list-one", "task-list-two", "task-list-three", "task-list-four"]'>
                        <h5 class="mt-0 task-header ">
                            Pendente <i class="mdi mdi-clock-plus-outline text-muted float-end" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                data-bs-title="SLA de pendência dois dias úteis"> +2D</i></h5>
                        <div id="dragparent1" class="task-list-items">
                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-info border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-info text-light" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Trasportadora ltda</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-success  border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-success text-light" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                        data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">
                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-danger  border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-danger text-light" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                        data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                        </div> <!-- end company-list-1-->
                    </div>

                    <div class="tasks" data-plugin="dragula"
                        data-containers='["task-list-one", "task-list-two", "task-list-three", "task-list-four"]'>
                        <h5 class="mt-0 task-header">Em contato</h5>

                        <div id="dragparent2" class="task-list-items">
                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-success  border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-success text-light" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                        data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-success  border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-success text-light" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                        data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->
                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-danger  border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-danger text-light" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                        data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                        </div> <!-- end company-list-1-->
                    </div> <!-- END coluna 2 -->
                    <div class="tasks" data-plugin="dragula"
                        data-containers='["task-list-one", "task-list-two", "task-list-three", "task-list-four"]'>
                        <h5 class="mt-0 task-header">Em agendamento</h5>

                        <div id="dragparent3" class="task-list-items">
                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-danger  border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-danger text-light" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                        data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-danger  border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-danger text-light" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                        data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-info border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-info text-light" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                        </div> <!-- end company-list-1-->
                    </div><!-- end coluna 3-->

                    <div class="tasks" data-plugin="dragula"
                        data-containers='["task-list-one", "task-list-two", "task-list-three", "task-list-four"]'>
                        <h5 class="mt-0 task-header">Agendado</h5>

                        <div id="dragparent4" class="task-list-items">
                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-info border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-info text-light" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-info border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-info text-light" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->
                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-danger  border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-danger text-light" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                        data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->


                        </div> <!-- end company-list-1-->
                    </div><!-- end coluna 4 -->

                    <div class="tasks" data-plugin="dragula"
                        data-containers='["task-list-one", "task-list-two", "task-list-three", "task-list-four"]'>
                        <h5 class="mt-0 task-header">Em instalação</h5>

                        <div id="dragparent5" class="task-list-items">
                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-danger  border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-danger text-light" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                        data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-success  border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-success text-light" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                        data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                            <!-- Task Item -->
                            <div class="card  mb-0 dragthing border-success  border">
                                <div class="card-body p-3">
                                    <small class="float-end text-muted" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip"
                                        data-bs-title="data do pedido implantado no sistema">18 Jul 2018</small>
                                    <span class="badge bg-success text-light" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                        data-bs-title="número do pedido">92781748</span>

                                    <h5 class="mt-2 mb-2">
                                        <a href="#" data-bs-target="#task-detail-modal" class="text-body"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="info-tooltip"
                                            data-bs-title="nome fantasia do cliente">Transportadora LTDA</a>
                                    </h5>

                                    <p class="mb-0">
                                        <span class="text-nowrap mb-2 d-inline-block" data-bs-toggle="tooltip"
                                            data-bs-placement="top" data-bs-custom-class="info-tooltip"
                                            data-bs-title="contato efetuado">
                                            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                                            <b>28</b>
                                        </span>
                                    </p>

                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item"><i
                                                    class="ri-phone-line text-muted me-1"></i> Contato Efetuado</a>
                                        </div>
                                    </div>

                                    <p class="mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="info-tooltip" data-bs-title="Aline Oliveira">

                                        <span class="align-middle">aline.oliveira</span>
                                    </p>
                                </div> <!-- end card-body -->
                            </div>
                            <!-- Task Item End -->

                        </div> <!-- end company-list-1-->
                    </div>
                </div>



            </div> <!-- end .board-->
        </div> <!-- end col -->

        <!-- end row-->






        <!-- ============================================================== -->
        <!-- End Page content -->
        <!-- ============================================================== -->


        <!-- END wrapper -->



        <!-- Theme Settings -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="theme-settings-offcanvas">
            <div class="d-flex align-items-center bg-primary p-3 offcanvas-header">
                <h5 class="text-white m-0">Theme Settings</h5>
                <button type="button" class="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>

            <div class="offcanvas-body p-0">
                <div data-simplebar class="h-100">
                    <div class="card mb-0 p-3">
                        <h5 class="mt-0 font-16 fw-bold mb-3">Choose Layout</h5>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-check card-radio">
                                    <input id="customizer-layout01" name="data-layout" type="radio" value="vertical"
                                        class="form-check-input">
                                    <label class="form-check-label p-0 avatar-md w-100" for="customizer-layout01">
                                        <span class="d-flex h-100">
                                            <span class="flex-shrink-0">
                                                <span class="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                                    <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                </span>
                                            </span>
                                            <span class="flex-grow-1">
                                                <span class="d-flex h-100 flex-column">
                                                    <span class="bg-light d-block p-1"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="font-14 text-center text-muted mt-2">Vertical</h5>
                            </div>
                            <div class="col-4">
                                <div class="form-check card-radio">
                                    <input id="customizer-layout02" name="data-layout" type="radio" value="horizontal"
                                        class="form-check-input">
                                    <label class="form-check-label p-0 avatar-md w-100" for="customizer-layout02">
                                        <span class="d-flex h-100 flex-column">
                                            <span
                                                class="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                <span class="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                                <span
                                                    class="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                                <span
                                                    class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                <span
                                                    class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                <span
                                                    class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                            </span>
                                            <span class="bg-light d-block p-1"></span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="font-14 text-center text-muted mt-2">Horizontal</h5>
                            </div>
                        </div>

                        <h5 class="my-3 font-16 fw-bold">Color Scheme</h5>

                        <div class="colorscheme-cardradio">
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check card-radio">
                                        <input class="form-check-input" type="radio" name="data-theme"
                                            id="layout-color-light" value="light">
                                        <label class="form-check-label p-0 avatar-md w-100" for="layout-color-light">
                                            <div id="sidebar-size">
                                                <span class="d-flex h-100">
                                                    <span class="flex-shrink-0">
                                                        <span class="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                                            <span
                                                                class="d-block p-1 bg-secondary-lighten rounded mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        </span>
                                                    </span>
                                                    <span class="flex-grow-1">
                                                        <span class="d-flex h-100 flex-column bg-white rounded-2">
                                                            <span class="bg-light d-block p-1"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>

                                            <div id="topnav-color" class="bg-white rounded-2 h-100">
                                                <span class="d-flex h-100 flex-column">
                                                    <span
                                                        class="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                        <span class="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                    </span>
                                                    <span class="d-flex h-100 flex-column bg-white rounded-2">
                                                        <span class="bg-light d-block p-1"></span>
                                                    </span>
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Light</h5>
                                </div>

                                <div class="col-4">
                                    <div class="form-check card-radio">
                                        <input class="form-check-input" type="radio" name="data-theme"
                                            id="layout-color-dark" value="dark">
                                        <label class="form-check-label p-0 avatar-md w-100 bg-black"
                                            for="layout-color-dark">
                                            <div id="sidebar-size">
                                                <span class="d-flex h-100">
                                                    <span class="flex-shrink-0">
                                                        <span class="bg-light-lighten d-flex h-100 flex-column p-1 px-2">
                                                            <span
                                                                class="d-block p-1 bg-secondary-lighten rounded mb-1"></span>
                                                            <span
                                                                class="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1"></span>
                                                        </span>
                                                    </span>
                                                    <span class="flex-grow-1">
                                                        <span class="d-flex h-100 flex-column">
                                                            <span class="bg-light-lighten d-block p-1"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>

                                            <div id="topnav-color">
                                                <span class="d-flex h-100 flex-column">
                                                    <span
                                                        class="bg-light-lighten d-flex p-1 align-items-center border-bottom border-opacity-25 border-primary border-opacity-25">
                                                        <span class="d-block p-1 bg-secondary-lighten rounded me-1"></span>
                                                        <span
                                                            class="d-block border border-primary border-opacity-25 border-3 rounded ms-auto"></span>
                                                        <span
                                                            class="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                                                    </span>
                                                    <span class="bg-light-lighten d-block p-1"></span>
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Dark</h5>
                                </div>
                            </div>
                        </div>

                        <div id="layout-width">
                            <h5 class="my-3 font-16 fw-bold">Layout Mode</h5>

                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check card-radio">
                                        <input class="form-check-input" type="radio" name="data-layout-mode"
                                            id="layout-mode-fluid" value="fluid">
                                        <label class="form-check-label p-0 avatar-md w-100" for="layout-mode-fluid">
                                            <div id="sidebar-size">
                                                <span class="d-flex h-100">
                                                    <span class="flex-shrink-0">
                                                        <span class="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                                            <span
                                                                class="d-block p-1 bg-secondary-lighten rounded mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        </span>
                                                    </span>
                                                    <span class="flex-grow-1">
                                                        <span class="d-flex h-100 flex-column rounded-2">
                                                            <span class="bg-light d-block p-1"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>

                                            <div id="topnav-color">
                                                <span class="d-flex h-100 flex-column">
                                                    <span
                                                        class="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                        <span class="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                    </span>
                                                    <span class="bg-light d-block p-1"></span>
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Fluid</h5>
                                </div>
                                <div class="col-4" id="layout-boxed">
                                    <div class="form-check card-radio">
                                        <input class="form-check-input" type="radio" name="data-layout-mode"
                                            id="layout-mode-boxed" value="boxed">
                                        <label class="form-check-label p-0 avatar-md w-100 px-2" for="layout-mode-boxed">
                                            <div id="sidebar-size" class="border-start border-end">
                                                <span class="d-flex h-100">
                                                    <span class="flex-shrink-0">
                                                        <span class="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                                            <span
                                                                class="d-block p-1 bg-secondary-lighten rounded mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        </span>
                                                    </span>
                                                    <span class="flex-grow-1">
                                                        <span class="d-flex h-100 flex-column rounded-2">
                                                            <span class="bg-light d-block p-1"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>

                                            <div id="topnav-color" class="border-start border-end h-100">
                                                <span class="d-flex h-100 flex-column">
                                                    <span
                                                        class="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                        <span class="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                    </span>
                                                    <span class="bg-light d-block p-1"></span>
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Boxed</h5>
                                </div>

                                <div class="col-4" id="layout-detached">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-layout-mode"
                                            id="data-layout-detached" value="detached">
                                        <label class="form-check-label p-0 avatar-md w-100" for="data-layout-detached">
                                            <span class="d-flex h-100 flex-column">
                                                <span class="bg-light d-flex p-1 align-items-center border-bottom ">
                                                    <span class="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                </span>
                                                <span class="d-flex h-100 p-1 px-2">
                                                    <span class="flex-shrink-0">
                                                        <span class="bg-light d-flex h-100 flex-column p-1 px-2">
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span class="bg-light d-block p-1 mt-auto px-2"></span>
                                            </span>

                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Detached</h5>
                                </div>
                            </div>
                        </div>

                        <h5 class="my-3 font-16 fw-bold">Topbar Color</h5>

                        <div class="row">
                            <div class="col-4">
                                <div class="form-check card-radio">
                                    <input class="form-check-input" type="radio" name="data-topbar-color"
                                        id="topbar-color-light" value="light">
                                    <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-light">
                                        <div id="sidebar-size">
                                            <span class="d-flex h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                                        <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>

                                        <div id="topnav-color">
                                            <span class="d-flex h-100 flex-column">
                                                <span
                                                    class="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                    <span class="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                    <span
                                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                </span>
                                                <span class="bg-light d-block p-1"></span>
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <h5 class="font-14 text-center text-muted mt-2">Light</h5>
                            </div>

                            <div class="col-4" style="--ct-dark-rgb: 64,73,84;">
                                <div class="form-check card-radio">
                                    <input class="form-check-input" type="radio" name="data-topbar-color"
                                        id="topbar-color-dark" value="dark">
                                    <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-dark">
                                        <div id="sidebar-size">
                                            <span class="d-flex h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                                        <span class="d-block p-1 bg-primary-lighten rounded mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-dark d-block p-1"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>

                                        <div id="topnav-color">
                                            <span class="d-flex h-100 flex-column">
                                                <span
                                                    class="bg-dark d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                    <span class="d-block p-1 bg-primary-lighten rounded me-1"></span>
                                                    <span
                                                        class="d-block border border-primary border-opacity-25 border-3 rounded ms-auto"></span>
                                                    <span
                                                        class="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                                                    <span
                                                        class="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                                                    <span
                                                        class="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                                                </span>
                                                <span class="bg-light d-block p-1"></span>
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <h5 class="font-14 text-center text-muted mt-2">Dark</h5>
                            </div>

                            <div class="col-4">
                                <div class="form-check card-radio">
                                    <input class="form-check-input" type="radio" name="data-topbar-color"
                                        id="topbar-color-brand" value="brand">
                                    <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-brand">
                                        <div id="sidebar-size">
                                            <span class="d-flex h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                                        <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-primary bg-gradient d-block p-1"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>

                                        <div id="topnav-color">
                                            <span class="d-flex h-100 flex-column">
                                                <span
                                                    class="bg-primary bg-gradient d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                    <span class="d-block p-1 bg-light opacity-25 rounded me-1"></span>
                                                    <span
                                                        class="d-block border border-3 border opacity-25 rounded ms-auto"></span>
                                                    <span
                                                        class="d-block border border-3 border opacity-25 rounded ms-1"></span>
                                                    <span
                                                        class="d-block border border-3 border opacity-25 rounded ms-1"></span>
                                                    <span
                                                        class="d-block border border-3 border opacity-25 rounded ms-1"></span>
                                                </span>
                                                <span class="bg-light d-block p-1"></span>
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <h5 class="font-14 text-center text-muted mt-2">Brand</h5>
                            </div>
                        </div>

                        <div>
                            <h5 class="my-3 font-16 fw-bold">Menu Color</h5>

                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-menu-color"
                                            id="leftbar-color-light" value="light">
                                        <label class="form-check-label p-0 avatar-md w-100" for="leftbar-color-light">
                                            <div id="sidebar-size">
                                                <span class="d-flex h-100">
                                                    <span class="flex-shrink-0">
                                                        <span
                                                            class="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                                            <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        </span>
                                                    </span>
                                                    <span class="flex-grow-1">
                                                        <span class="d-flex h-100 flex-column">
                                                            <span class="bg-light d-block p-1"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>

                                            <div id="topnav-color">
                                                <span class="d-flex h-100 flex-column">
                                                    <span
                                                        class="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                                        <span class="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                    </span>
                                                    <span class="bg-light d-block p-1"></span>
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Light</h5>
                                </div>

                                <div class="col-4" style="--ct-dark-rgb: 64,73,84; --ct-border-color: #dee2e6;">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-menu-color"
                                            id="leftbar-color-dark" value="dark">
                                        <label class="form-check-label p-0 avatar-md w-100" for="leftbar-color-dark">
                                            <div id="sidebar-size">
                                                <span class="d-flex h-100">
                                                    <span class="flex-shrink-0">
                                                        <span class="bg-dark d-flex h-100 flex-column p-1 px-2">
                                                            <span
                                                                class="d-block p-1 bg-secondary-lighten rounded mb-1"></span>
                                                            <span
                                                                class="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1"></span>
                                                        </span>
                                                    </span>
                                                    <span class="flex-grow-1">
                                                        <span class="d-flex h-100 flex-column">
                                                            <span class="bg-light d-block p-1"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>

                                            <div id="topnav-color">
                                                <span class="d-flex h-100 flex-column">
                                                    <span
                                                        class="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-primary border-opacity-25">
                                                        <span class="d-block p-1 bg-primary-lighten rounded me-1"></span>
                                                        <span
                                                            class="d-block border border-secondary rounded border-opacity-25 border-3 ms-auto"></span>
                                                        <span
                                                            class="d-block border border-secondary rounded border-opacity-25 border-3 ms-1"></span>
                                                        <span
                                                            class="d-block border border-secondary rounded border-opacity-25 border-3 ms-1"></span>
                                                        <span
                                                            class="d-block border border-secondary rounded border-opacity-25 border-3 ms-1"></span>
                                                    </span>
                                                    <span class="bg-dark d-block p-1"></span>
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Dark</h5>
                                </div>
                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-menu-color"
                                            id="leftbar-color-brand" value="brand">
                                        <label class="form-check-label p-0 avatar-md w-100" for="leftbar-color-brand">
                                            <div id="sidebar-size">
                                                <span class="d-flex h-100">
                                                    <span class="flex-shrink-0">
                                                        <span
                                                            class="bg-primary bg-gradient d-flex h-100 flex-column p-1 px-2">
                                                            <span class="d-block p-1 bg-light-lighten rounded mb-1"></span>
                                                            <span
                                                                class="d-block border opacity-25 rounded border-3 w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border opacity-25 rounded border-3 w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border opacity-25 rounded border-3 w-100 mb-1"></span>
                                                            <span
                                                                class="d-block border opacity-25 rounded border-3 w-100 mb-1"></span>
                                                        </span>
                                                    </span>
                                                    <span class="flex-grow-1">
                                                        <span class="d-flex h-100 flex-column">
                                                            <span class="bg-light d-block p-1"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>

                                            <div id="topnav-color">
                                                <span class="d-flex h-100 flex-column">
                                                    <span
                                                        class="bg-light d-flex p-1 align-items-center border-bottom border-secondary">
                                                        <span class="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                                    </span>
                                                    <span class="bg-primary bg-gradient d-block p-1"></span>
                                                </span>
                                            </div>

                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Brand</h5>
                                </div>
                            </div>
                        </div>

                        <div id="sidebar-size">
                            <h5 class="my-3 font-16 fw-bold">Sidebar Size</h5>

                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidenav-size"
                                            id="leftbar-size-default" value="default">
                                        <label class="form-check-label p-0 avatar-md w-100" for="leftbar-size-default">
                                            <span class="d-flex h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                                        <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Default</h5>
                                </div>

                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidenav-size"
                                            id="leftbar-size-compact" value="compact">
                                        <label class="form-check-label p-0 avatar-md w-100" for="leftbar-size-compact">
                                            <span class="d-flex h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 border-end  flex-column p-1">
                                                        <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Compact</h5>
                                </div>

                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidenav-size"
                                            id="leftbar-size-small" value="condensed">
                                        <label class="form-check-label p-0 avatar-md w-100" for="leftbar-size-small">
                                            <span class="d-flex h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 border-end flex-column"
                                                        style="padding: 2px;">
                                                        <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Condensed</h5>
                                </div>

                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidenav-size"
                                            id="leftbar-size-small-hover" value="sm-hover">
                                        <label class="form-check-label p-0 avatar-md w-100" for="leftbar-size-small-hover">
                                            <span class="d-flex h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 border-end flex-column"
                                                        style="padding: 2px;">
                                                        <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                        <span
                                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Hover View</h5>
                                </div>

                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidenav-size"
                                            id="leftbar-size-full" value="full">
                                        <label class="form-check-label p-0 avatar-md w-100" for="leftbar-size-full">
                                            <span class="d-flex h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="d-block p-1 bg-dark-lighten mb-1"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Full Layout</h5>
                                </div>

                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidenav-size"
                                            id="leftbar-size-fullscreen" value="fullscreen">
                                        <label class="form-check-label p-0 avatar-md w-100" for="leftbar-size-fullscreen">
                                            <span class="d-flex h-100">
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="font-14 text-center text-muted mt-2">Fullscreen Layout</h5>
                                </div>
                            </div>
                        </div>

                        <div id="layout-position">
                            <h5 class="my-3 font-16 fw-bold">Layout Position</h5>

                            <div class="btn-group radio" role="group">
                                <input type="radio" class="btn-check" name="data-layout-position" id="layout-position-fixed"
                                    value="fixed">
                                <label class="btn btn-soft-primary w-sm" for="layout-position-fixed">Fixed</label>

                                <input type="radio" class="btn-check" name="data-layout-position"
                                    id="layout-position-scrollable" value="scrollable">
                                <label class="btn btn-soft-primary w-sm ms-0"
                                    for="layout-position-scrollable">Scrollable</label>
                            </div>
                        </div>

                        <div id="sidebar-user">
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <label class="font-16 fw-bold m-0" for="sidebaruser-check">Sidebar User Info</label>
                                <div class="form-check form-switch">
                                    <input type="checkbox" class="form-check-input" name="sidebar-user"
                                        id="sidebaruser-check">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="offcanvas-footer border-top p-3 text-center">
                <div class="row">
                    <div class="col-6">
                        <button type="button" class="btn btn-light w-100" id="reset-layout">Reset</button>
                    </div>
                    <div class="col-6">
                        <a href="https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/"
                            target="_blank" role="button" class="btn btn-primary w-100">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>

        <!--  Add new task modal -->
        <div class="modal fade task-modal-content" id="add-new-task-modal" tabindex="-1" role="dialog"
            aria-labelledby="NewTaskModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="NewTaskModalLabel">Create New Task</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="p-2">
                            <div class="mb-3">
                                <label class="form-label">Project</label>
                                <select class="form-select form-control-light">
                                    <option>Select</option>
                                    <option>Hyper - Admin Dashboard</option>
                                    <option>CRM - Design & Development</option>
                                    <option>iOS - App Design</option>
                                </select>
                            </div>

                            <div class="row">
                                <div class="col-md-8">
                                    <div class="mb-3">
                                        <label for="task-title" class="form-label">Title</label>
                                        <input type="text" class="form-control form-control-light" id="task-title"
                                            placeholder="Enter title">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="task-priority2" class="form-label">Priority</label>
                                        <select class="form-select form-control-light" id="task-priority2">
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div class="row">


                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="task-priority" class="form-label">Due Date</label>
                                        <input type="text" class="form-control form-control-light" id="birthdatepicker"
                                            data-toggle="date-picker" data-single-date-picker="true">
                                    </div>
                                </div>
                            </div>

                            <div class="text-end">
                                <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary">Create</button>
                            </div>
                        </form>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

        <!--  Task details modal -->
        <div class="modal fade task-modal-content" id="task-detail-modal" tabindex="-1" role="dialog"
            aria-labelledby="TaskDetailModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="TaskDetailModalLabel">iOS App home page <span
                                class="badge bg-danger ms-2">High</span></h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="p-2">
                            <h5 class="mt-0">Description:</h5>

                            <p class="text-muted mb-4">
                                Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique?
                                Tempore, quos delectus asperiores
                                libero voluptas quod perferendis! Voluptate, quod illo rerum? Lorem ipsum dolor sit
                                amet. With supporting text below
                                as a natural lead-in to additional contenposuere erat a ante.
                            </p>

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mb-4">
                                        <h5>Create Date</h5>
                                        <p>17 March 2018 <small class="text-muted">1:00 PM</small></p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-4">
                                        <h5>Due Date</h5>
                                        <p>22 December 2018 <small class="text-muted">1:00 PM</small></p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-4" id="tooltip-container">
                                        <h5>Asignee:</h5>
                                        <a href="javascript:void(0);" data-bs-container="#tooltip-container"
                                            data-bs-toggle="tooltip" data-bs-placement="top" title="Mat Helme"
                                            class="d-inline-block">
                                            <img src="Figuras/usuariosSGI/aline.oliveira.jpg" alt="user-img">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- end row-->

                            <ul class="nav nav-tabs nav-bordered mb-3">
                                <li class="nav-item">
                                    <a href="#home-b1" data-bs-toggle="tab" aria-expanded="false" class="nav-link active">
                                        Comments
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#profile-b1" data-bs-toggle="tab" aria-expanded="true" class="nav-link">
                                        Files
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content">
                                <div class="tab-pane show active" id="home-b1">
                                    <textarea class="form-control form-control-light mb-2" placeholder="Write message"
                                        id="example-textarea" rows="3"></textarea>
                                    <div class="text-end">
                                        <div class="btn-group mb-2 d-none d-sm-inline-block">
                                            <button type="button" class="btn btn-link btn-sm text-muted font-18"><i
                                                    class="ri-attachment-2"></i></button>
                                        </div>
                                        <div class="btn-group mb-2 ms-2 d-none d-sm-inline-block">
                                            <button type="button" class="btn btn-primary btn-sm">Submit</button>
                                        </div>
                                    </div>

                                    <div class="d-flex mt-2">
                                        <img class="me-3 avatar-sm rounded-circle"
                                            src="Figuras/usuariosSGI/aline.oliveira.jpg" alt="user-img">
                                        <div class="w-100">
                                            <h5 class="mt-0">Jeremy Tomlinson</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin. Cras purus odio, vestibulum in
                                            vulputate at, tempus viverra turpis.


                                        </div>
                                    </div>
                                </div>

                                <div class="text-center mt-2">
                                    <a href="javascript:void(0);" class="text-danger">Load more </a>
                                </div>
                            </div>
                            <div class="tab-pane" id="profile-b1">
                                <div class="card mb-1 shadow-none border">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title rounded">
                                                        .ZIP
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col ps-0">
                                                <a href="javascript:void(0);"
                                                    class="text-muted fw-bold">Hyper-admin-design.zip</a>
                                                <p class="mb-0">2.3 MB</p>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Button -->
                                                <a href="javascript:void(0);" class="btn btn-link btn-lg text-muted">
                                                    <i class="ri-download-2-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-1 shadow-none border">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <img src="Figuras/usuariosSGI/aline.oliveira.jpg" alt="user-img" />
                                            </div>
                                            <div class="col ps-0">
                                                <a href="javascript:void(0);"
                                                    class="text-muted fw-bold">Dashboard-design.jpg</a>
                                                <p class="mb-0">3.25 MB</p>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Button -->
                                                <a href="javascript:void(0);" class="btn btn-link btn-lg text-muted">
                                                    <i class="ri-download-2-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-0 shadow-none border">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title bg-secondary rounded">
                                                        .MP4
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col ps-0">
                                                <a href="javascript:void(0);"
                                                    class="text-muted fw-bold">Admin-bug-report.mp4</a>
                                                <p class="mb-0">7.05 MB</p>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Button -->
                                                <a href="javascript:void(0);" class="btn btn-link btn-lg text-muted">
                                                    <i class="ri-download-2-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> <!-- .p-2 -->
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>

<script>
import jquery from 'jquery'
import 'dragula/dragula'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    mounted() {
        function init() {
            dragula([document.querySelector("#dragparent1"), document.querySelector("#dragparent2"), document.querySelector("#dragparent3"), document.querySelector("#dragparent4"), document.querySelector("#dragparent5")]);
            //dragula([document.getElementById(left), document.getElementById(right)]);
        }
        window.addEventListener("DOMContentLoaded", () => {
            init()
        })
    }

}

</script>