<script>
    import Landing from "$lib/components/static/landing.svelte";
    import MediaCard from '$lib/components/reusable/mediaCard.svelte';
    import System from "$lib/components/static/system.svelte";
    import Partner from "$lib/components/static/partner.svelte";
    import Team from "$lib/components/static/team.svelte";
    import Faq from "$lib/components/static/faq.svelte";

    export let data;
    let media = data.media 
    console.log(media)
</script>

<svelte:head>
    <title>Pipedream</title>
    <meta name="description" content= "Pipedream makes underground delivery that feels like teleportation.">
</svelte:head>

<Landing/>

<div id="media" class="flex-36em fitScreen background-secondary textColor-primary">
    <div id="landing-abs">

        <div id="projectContainer">
            {#each media as medias}
                <MediaCard
                    id={medias.id}
                    title="{medias.title}"
                    thumbnail="{medias.thumbnail}"
                    desc="{medias.desc}"
                />
            {/each}
        </div>
    </div>
</div>

<System/>

<Partner/>

<Team/>

<Faq/>

<style>
    #media{
        position: relative;
        background-color: var(--orange);
        overflow: hidden;
    }

    #projectContainer{
        margin-left: -5vw;
        margin-right: -5vw;
        padding-left: calc(10vw + 1px);
        padding-right: calc(6vw + 1px);

        display: grid;
        grid-auto-flow: column;
        gap: 2vw;

        overflow-x: auto;
        overscroll-behavior-inline: contain;
    }

    /* height of landing is 88vh */
    /* width of landing is 93vw */
    #landing{
        background-color: var(--secondary);
        overflow: hidden;
    }

    #landing-abs{
        width: 95vw;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
