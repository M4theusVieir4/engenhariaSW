<template>
    <div class="colaboradores">
        <div class="row">
            <div class="col-md-12 mb-3"> <!-- Título Pág -->
                <h2 class="card-title mb-0">Agendamentos Realizados por Colaborador</h2>
            </div><!-- end col e Título Pág -->
        </div>
        <div class="row">
            <div class="container-fluid">
                <!-- //////////////////////////////////////////////////////////-->
                <ul class="nav nav-tabs nav-bordered" id="model">
                    <li class="nav-item">
                        <a href="#favUsers" data-bs-toggle="tab" aria-expanded="true" class="nav-link py-2">
                            Última semana
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#friendUsers" data-bs-toggle="tab" aria-expanded="true" class="nav-link py-2">
                            Último mês
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Ranking de Agendamentos</h4>
                        <div dir="ltr">
                            <div id="chart-year" data-colors="#727cf5,#6c757d,#0acf97,#fa5c7c,#ffbc00,#39afd1">

                            </div>
                        </div>
                    </div>
                    <!-- end card body-->
                </div>
                <!-- end card -->
            </div>
            <div class=" col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Agendamentos última semana</h4>
                        <div dir="ltr">
                            <div id="chart-quarter" data-colors="#727cf5,#6c757d,#0acf97,#fa5c7c,#ffbc00,#39afd1"></div>
                        </div>
                    </div>
                    <!-- end card body-->
                </div>
                <!-- end card -->
            </div>
        </div>

    </div>
</template>

<script>
import ApexCharts from 'apexcharts'
import jquery from 'jquery'
//
// DYNAMIC LOADED CHART//
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    mounted() {

        console.log('lalalalal')
        var colors = ['#727cf5', '#6c757d', '#0acf97', '#fa5c7c', '#ffbc00', '#39afd1', '#e3eaef', '#313a46'];
        var dataColors = jquery("#chart-year").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }

        Apex = {
            chart: {
                toolbar: {
                    show: false
                }
            },
            tooltip: {
                shared: false
            },
            legend: {
                show: false
            }
        }

        /**
         * Randomize array element order in-place.
         * Using Durstenfeld shuffle algorithm.
         */
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }

        var arrayData = [{
            y: 400,
            quarters: [{
                x: 'SEG',
                y: 120
            }, {
                x: 'TER',
                y: 90
            }, {
                x: 'QUA',
                y: 100
            }, {
                x: 'QUI',
                y: 90
            }, {
                x: 'SEX',
                y: 90
            }, {
                x: 'SÁB',
                y: 90
            }, {
                x: 'DOM',
                y: 90
            }]
        }, {
            y: 430,
            quarters: [{
                x: 'SEG',
                y: 120
            }, {
                x: 'TER',
                y: 60
            }, {
                x: 'QUA',
                y: 70
            }, {
                x: 'QUI',
                y: 90
            }, {
                x: 'SEX',
                y: 85
            }, {
                x: 'SÁB',
                y: 63
            }, {
                x: 'DOM',
                y: 72
            }]
        }, {
            y: 448,
            quarters: [{
                x: 'SEG',
                y: 70
            }, {
                x: 'TER',
                y: 100
            }, {
                x: 'QUA',
                y: 140
            }, {
                x: 'QUI',
                y: 90
            }, {
                x: 'SEX',
                y: 68
            }, {
                x: 'SÁB',
                y: 79
            }, {
                x: 'DOM',
                y: 90
            }]
        }, {
            y: 470,
            quarters: [{
                x: 'SEG',
                y: 150
            }, {
                x: 'TER',
                y: 190
            }, {
                x: 'QUA',
                y: 175
            }, {
                x: 'QUI',
                y: 189
            }, {
                x: 'SEX',
                y: 96
            }, {
                x: 'SÁB',
                y: 70
            }, {
                x: 'DOM',
                y: 85
            }]
        }, {
            y: 540,
            quarters: [{
                x: 'SEG',
                y: 120
            }, {
                x: 'TER',
                y: 130
            }, {
                x: 'QUA',
                y: 150
            }, {
                x: 'QUI',
                y: 170
            }, {
                x: 'SEX',
                y: 140
            }, {
                x: 'SÁB',
                y: 100
            }, {
                x: 'DOM',
                y: 130
            }]
        }, {
            y: 580,
            quarters: [{
                x: 'SEG',
                y: 170
            }, {
                x: 'TER',
                y: 130
            }, {
                x: 'QUA',
                y: 160
            }, {
                x: 'QUI',
                y: 180
            }, {
                x: 'SEX',
                y: 129
            }, {
                x: 'SÁB',
                y: 90
            }, {
                x: 'DOM',
                y: 151
            }]
        }];

        function makeData() {
            var dataSet = shuffleArray(arrayData)

            var dataYearSeries = [{
                x: "Thiago",
                y: dataSet[0].y,
                color: colors[0],
                quarters: dataSet[0].quarters
            }, {
                x: "Leite",
                y: dataSet[1].y,
                color: colors[1],
                quarters: dataSet[1].quarters
            }, {
                x: "Felipe",
                y: dataSet[2].y,
                color: colors[2],
                quarters: dataSet[2].quarters
            }, {
                x: "Gabriel Mota",
                y: dataSet[3].y,
                color: colors[3],
                quarters: dataSet[3].quarters
            }, {
                x: "Vieira",
                y: dataSet[4].y,
                color: colors[4],
                quarters: dataSet[4].quarters
            }, {
                x: "Gabriel Alves",
                y: dataSet[5].y,
                color: colors[5],
                quarters: dataSet[5].quarters
            }];

            return dataYearSeries
        }

        function updateQuarterChart(sourceChart, destChartIDToUpdate) {
            var series = [];
            var seriesIndex = 0;
            var colors = []


            if (sourceChart.w.globals.selectedDataPoints[0]) {
                var selectedPoints = sourceChart.w.globals.selectedDataPoints;
                for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
                    var selectedIndex = selectedPoints[seriesIndex][i];
                    var yearSeries = sourceChart.w.config.series[seriesIndex];
                }
                series.push({
                    name: yearSeries.data[selectedIndex].x,
                    data: yearSeries.data[selectedIndex].quarters
                })
                colors.push(yearSeries.data[selectedIndex].color)

                if (series.length === 0) series = [{
                    data: []
                }]

                return ApexCharts.exec(destChartIDToUpdate, 'updateOptions', {
                    series: series,
                    colors: colors,
                    fill: {
                        colors: colors
                    }
                })
            }
        }


        var options = {
            series: [{
                data: makeData()
            }],
            chart: {
                id: 'barYear',
                height: 380,
                width: '100%',
                type: 'bar',
                events: {
                    dataPointSelection: function (e, chart, opts) {
                        var quarterChartEl = document.querySelector("#chart-quarter");
                        var yearChartEl = document.querySelector("#chart-year");

                        if (opts.selectedDataPoints[0].length === 1) {
                            if (quarterChartEl.classList.contains("active")) {
                                updateQuarterChart(chart, 'barQuarter')
                            } else {
                                yearChartEl.classList.add("chart-quarter-activated")
                                quarterChartEl.classList.add("active");
                                updateQuarterChart(chart, 'barQuarter')
                            }
                        } else {
                            updateQuarterChart(chart, 'barQuarter')
                        }

                        if (opts.selectedDataPoints[0].length === 0) {
                            yearChartEl.classList.remove("chart-quarter-activated")
                            quarterChartEl.classList.remove("active");
                        }

                    },
                    updated: function (chart) {
                        updateQuarterChart(chart, 'barQuarter')
                    }
                }
            },
            plotOptions: {
                bar: {
                    distributed: true,
                    horizontal: true,
                    barHeight: '75%',
                    dataLabels: {
                        position: 'bottom'
                    }
                }
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#fff']
                },
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex]
                },
                offsetX: 0,
                dropShadow: {
                    enabled: true
                }
            },

            colors: colors,

            states: {
                normal: {
                    filter: {
                        type: 'desaturate'
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: true,
                    filter: {
                        type: 'darken',
                        value: 1
                    }
                }
            },
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (val, opts) {
                            return opts.w.globals.labels[opts.dataPointIndex]
                        }
                    }
                }
            },
            title: {
                text: '(Clique na barra para ver os detalhes)',
                offsetX: 15
            },
            yaxis: {
                labels: {
                    show: false
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#chart-year"), options);
        chart.render();

        var optionsQuarter = {
            series: [{
                data: []
            }],
            chart: {
                id: 'barQuarter',
                height: 380,
                width: '100%',
                type: 'bar',
                stacked: true
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                    horizontal: false
                }
            },
            legend: {
                show: false
            },
            grid: {
                yaxis: {
                    lines: {
                        show: false,
                    }
                },
                xaxis: {
                    lines: {
                        show: true,
                    }
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            title: {

                offsetX: 10
            },
            tooltip: {
                x: {
                    formatter: function (val, opts) {
                        return opts.w.globals.seriesNames[opts.seriesIndex]
                    }
                },
                y: {
                    title: {
                        formatter: function (val, opts) {
                            return opts.w.globals.labels[opts.dataPointIndex]
                        }
                    }
                }
            }
        };

        var chartQuarter = new ApexCharts(document.querySelector("#chart-quarter"), optionsQuarter);
        chartQuarter.render();


        chart.addEventListener('dataPointSelection', function (e, chart, opts) {
            var quarterChartEl = document.querySelector("#chart-quarter");
            var yearChartEl = document.querySelector("#chart-year");

            if (opts.selectedDataPoints[0].length === 1) {
                if (quarterChartEl.classList.contains("active")) {
                    updateQuarterChart(chart, 'barQuarter')
                } else {
                    yearChartEl.classList.add("chart-quarter-activated")
                    quarterChartEl.classList.add("active");
                    updateQuarterChart(chart, 'barQuarter')
                }
            } else {
                updateQuarterChart(chart, 'barQuarter')
            }

            if (opts.selectedDataPoints[0].length === 0) {
                yearChartEl.classList.remove("chart-quarter-activated")
                quarterChartEl.classList.remove("active");
            }



        })

        chart.addEventListener('updated', function (chart) {
            updateQuarterChart(chart, 'barQuarter')
        })

        document.querySelectorAll(".nav-item").forEach((item) => {
            item.addEventListener("click", function (e) {
                chart.updateSeries([{
                    data: makeData()
                }])
            })

        })

    }
}








</script>