<div id="system" class="fitScreen background-secondary textColor-primary">
    <div id="portal-box" class="box flex-36em">
        <div class="relative">
            <h2>Portal</h2>
        </div>
        <img src="/img/portal_system.png" alt="portal">
    </div>
    <div id="robot-box" class="box flex-36em">
        <div class="relative">
            <h2>Robot</h2>
        </div>
        <img id="robot" src="/img/robot_system.png" alt="Robot">
    </div>
    <div id="tunnel-box" class="box flex-36em">
        <div class="relative">
            <h2>Tunnel</h2>
        </div>
        <img id="tunnel" src="/img/tunnel_system.jpg" alt="Tunnel">
    </div>
</div>

<style>
    #system{
        background-color: rgb(13, 4, 52);
        box-sizing: border-box;
        padding: 7.5vw;
    }

    .box{
        height: calc((100vh - 15vw)/3);
    }

    .box:hover{
        opacity: 0.5;
    }

    h2{
        position: absolute;
        top: 50%;
		transform: translateY(-50%);
    }

    #robot {
        width: 50vw;
    }
</style>