window.onload = function () {

        inView('section')
        .on('enter', el => {
          el.className = 'active';
        })
        .on('exit', el => {
          el.className = '';
        })

    }