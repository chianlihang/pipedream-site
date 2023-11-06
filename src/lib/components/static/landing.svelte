<script>
    $:count = 0;

    let matrix = 0;
    const increaseMatrix = () => {
        if (matrix == 3){
            matrix = 0;
        } else {
            matrix += 1;
        }
    }

    let opaque = true;
    const toggleOpacity = () => {
        opaque = !opaque;
        console.log(opaque);
    }
</script>

<div id="landing" class="flex-36em fitScreen background-secondary textColor-primary">
    <div id="landingText-rel" class="relative">
        <div id="landingText-abs">
            {#if count == 0}
                <h2>Underground</h2>
                <h2>delivery that</h2>
                <h2>feels like</h2>
                <h2>teleportation</h2>
            {:else if count == 1}
                <h2 style="white-space: nowrap;">90% of goods</h2>
                <h2 style="white-space: nowrap;">in under 10 mins</h2>
                <h2 style="white-space: nowrap;">for under $1</h2>
            {:else}
                <h2 style="white-space: nowrap;">Plug-and-play</h2>
                <h2 style="white-space: nowrap;">invisible</h2>
                <h2 style="white-space: nowrap;">architecture</h2>
            {/if}
        </div>
    </div>
    <div id="matrixBox-rel" class="relative">
        {#if matrix == 0}
            {#if opaque == true}
                <div id="clickBox-abs"><p>&nbsp; click to place your portal &nbsp;</p></div>
            {:else}
                <div id="clickBox-abs" style="opacity: 0.5;"><p>&nbsp; click to place your portal &nbsp;</p></div>
            {/if}
            <div class:opaque={opaque} id="matrixBox-abs">
                <img id="matrix" src="/img/matrix1.png" on:click={increaseMatrix} on:mouseenter={toggleOpacity} on:mouseleave={toggleOpacity} alt="City Network Simulation">
                <div class="flex-36em">
                    <p>0 deliveries/day</p>
                    <p>$0 installation</p>
                    <p>$0 revenue/year</p>
                </div>
            </div>
        {:else if matrix == 1}
            <div id="matrixBox-abs">
                <img id="matrix" src="/img/matrix2.png" on:click={increaseMatrix} on:mouseenter={toggleOpacity} on:mouseleave={toggleOpacity} alt="City Network Simulation">
                <div class="flex-36em">
                    <p>0 deliveries/day</p>
                    <p>$10K installation</p>
                    <p>$0 revenue/year</p>
                </div>
            </div>
        {:else if matrix == 2}
            <div id="matrixBox-abs">
                <img id="matrix" src="/img/matrix3.png" on:click={increaseMatrix} on:mouseenter={toggleOpacity} on:mouseleave={toggleOpacity} alt="City Network Simulation">
                <div class="flex-36em">
                    <p>50 deliveries/day</p>
                    <p>$1M installation</p>
                    <p>$18K revenue/year</p>
                </div>
            </div>    
        {:else}
            <div id="matrixBox-abs">
                <img id="matrix" src="/img/matrix4.png" on:click={increaseMatrix} alt="City Network Simulation">
                <div class="flex-36em">
                    <p>200 deliveries/day</p>
                    <p>$2M installation</p>
                    <p>$73K revenue/year</p>
                </div>
            </div>
        {/if}        
    </div>
</div>

<style>
    #landingText-abs{
        position: absolute;
        top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
    }

    #clickBox-abs{
        padding: 1%;
        border-radius: 2vw;
        position: absolute;
        background-color: rgb(95, 87, 206);
        color: var(--primary);
        top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
        z-index: 1;
    }

    #clickBox-abs:hover{
        opacity: 0.5;
    }

    #matrixBox-abs{
        position: absolute;
        top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
    }

    #matrix{
        width: 30vw;
    }
</style>