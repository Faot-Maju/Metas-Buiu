window.onload = function () {

    function rodarMeta(timerId, percentId, progressId, dataFinal) {

        const inicio = new Date("2025-01-01").getTime();
        const fim = new Date(dataFinal).getTime();

        setInterval(() => {

            const agora = new Date().getTime();
            const distancia = fim - agora;

            const timer = document.getElementById(timerId);
            const percent = document.getElementById(percentId);
            const barra = document.getElementById(progressId);

            if (!timer || !percent || !barra) return;

            if (distancia < 0) {
                timer.innerHTML = "Meta concluída!";
                percent.innerHTML = "100%";
                barra.style.width = "100%";
                return;
            }

            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

            timer.innerHTML = `${dias}d ${horas}h ${minutos}m`;

            let progresso = ((agora - inicio) / (fim - inicio)) * 100;

            if (progresso < 0) progresso = 0;
            if (progresso > 100) progresso = 100;

            percent.innerHTML = progresso.toFixed(1) + "%";
            barra.style.width = progresso + "%";

        }, 1000);
    }

    rodarMeta("timer1", "percent1", "progress1", "2026-12-15");
    rodarMeta("timer2", "percent2", "progress2", "2026-12-31");
    rodarMeta("timer3", "percent3", "progress3", "2027-12-31");
    rodarMeta("timer4", "percent4", "progress4", "2028-06-01");
    rodarMeta("timer5", "percent5", "progress5", "2027-06-01");

};
