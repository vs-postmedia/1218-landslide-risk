<script>
    import { onMount } from 'svelte';

    // CSS
    import normalize from './css/normalize.css';
    import postmedia from './css/postmedia.css';
    import colours from './css/colors.css';
    import fonts from './css/fonts.css';
    import css from './css/main.css';

    // VARS
    let currentStep, iframe;
    
    // COMPONENTS
    import Steps from '$components/Steps.svelte';

    // SET CHART HEIGH & URL HERE...
    const chartHeight = '575px';
    const flourishStoryUrl = 'https://flo.uri.sh/story/2782064/embed';

    // FUNCTIONS
    const updateStep = function(currentStep) {
        iframe = document.querySelector('#app .chart > iframe');
        iframe.src = iframe.src.replace(/#slide-.*/, '') + '#slide-' + currentStep;
    }
    
    // conditional block to trigger step change on scroll
    $: {
        if (currentStep === 0) {
           updateStep(currentStep);
        } else if (currentStep === 1) {
            updateStep(currentStep);
        } else if (currentStep === 2) {
            updateStep(currentStep );
        } else if (currentStep === 3) {
            updateStep(currentStep);
        }
    };
    onMount(() => {
        document.querySelectorAll('li.step').forEach(step => {
            step.addEventListener('touchstart', () => {
                document.querySelector('iframe').style.pointerEvents = 'none';
            });
            
            step.addEventListener('touchend', () => {
                document.querySelector('iframe').style.pointerEvents = 'auto';
            });
        });
    });
</script>

<!-- MARKUP -->
<section class="scrollyteller sticky">
    <header>
        <h1>How landslides form in Howe Sound</h1>
        <!-- <p class="subhead"></p> -->
    </header>
    <div class="chart sticky">
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe src={flourishStoryUrl} frameborder='0' scrolling='no' style="width:100%;height:{chartHeight};" title="flourish-embed"></iframe>
    </div>

    <footer>
        <p class="source">Source:
            <a href="https://web.viu.ca/earle/howe-sound/" target="_blank">Geological Survey of Canada</a>,
            <a href="https://www.earthdata.nasa.gov/data/instruments/srtm" target="_blank">NASA</a>,
            <a href="https://www.openstreetmap.org/" target="_blank">OSM.org</a>
        </p>
        <!-- flourish logo -->
        <div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/3706064/?utm_source=embed&utm_campaign=visualisation/3706064' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
    </footer>
</section>

<ul class="steps">
    <Steps bind:currentStep={currentStep}/>
</ul>

<!-- CSS -->
<style>
    /* STEPS */
    section {
        position: relative;
    }

    .sticky { 
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        position: sticky;
        top: 5vh;
        z-index: 1;
    }
    
    .chart > iframe {
        pointer-events: none;
    }

    .steps {
        margin-top: -100%;
        position: relative;
        z-index: 2;
    }
    footer {
        display: flex;
        margin-top: 80px;
    }
</style>