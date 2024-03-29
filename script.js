    google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('string', 'Resource')
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['1', 'Einführung und Motivation', 'source',
         new Date(2022, 4, 25), new Date(2022, 5, 2), null,  100,  null],
        ['20', 'Blockchain allgemein, Hintergrund', 'sichten',
         new Date(2022, 5, 3), new Date(2022, 5, 10), null, 100, '1'],
         ['21', 'Blockchain allgemein, Hintergrund', 'schreiben',
         new Date(2022, 5, 11), new Date(2022, 5, 31), null, 100, '1,20'],
        ['30', 'Zero Knowledge Proof allgemein', 'sichten',
         new Date(2022, 6, 1), new Date(2022, 8, 31), null, 100, '1,20,21'],
         ['31', 'Zero Knowledge Proof allgemein', 'schreiben',
         new Date(2022, 6, 1), new Date(2022, 9, 10), null, 100, '1,20,21,30'],
         ['40', 'Related Work ZKP Anwendung/libs', 'sichten',
         new Date(2022, 7, 1), new Date(2022, 9, 6), null, 100, '30,31'],
         ['41', 'Related Work ZKP Anwendung/libs', 'schreiben',
         new Date(2022, 7, 1), new Date(2022, 9, 14), null, 100, '40'],
         ['5', 'Concept/Doku Impl.', 'dev',
         new Date(2022, 8, 9), new Date(2022, 9, 30), null, 100, '30'],
         ['6', 'Impl. Prototyp', 'dev',
         new Date(2022, 8, 16), new Date(2022, 9, 30), null, 100, '30'],
         ['7', 'Auswertung der Konzeptionierung/Impl.', 'dev',
         new Date(2022, 10, 1), new Date(2022, 10, 14), null, 100, '30'],
         ['8', 'Future Work und Zusammenfassung', 'outlook',
         new Date(2022, 10, 15), new Date(2022, 10, 31), null, 100, '21,31,41,5,6,7'],
         ['9', 'Buffer', 'extra',
         new Date(2022, 10, 23), new Date(2022, 12, 14), null, 100, null],
         ['10', 'Bibliographie', 'source',
         new Date(2022, 4, 25), new Date(2022, 5, 2), null, 100, null]
      ]);

      var options = {
        gantt: {
          criticalPathEnabled: true,
          criticalPathStyle: {
            stroke: '#e64a19',
            strokeWidth: 5
          },
          sortTasks: false,
          defaultStartDate: new Date(2022,4,1),
        },
        
        height: 600
        
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
