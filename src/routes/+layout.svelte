<script lang="ts">
    import '../styles/reset.css'
    import '../styles/global.css'
    import '../styles/variables.css'
    import '../styles/utilities.css'
    
	import Nav from '$lib/components/static/nav.svelte';
    import Footer from '$lib/components/static/footer.svelte';
    $: innerWidth=1024;
</script>

<svelte:window bind:innerWidth/>

{#if innerWidth<1024}
    <div id="mobileLanding" class="fitScreen relative">
        <p id="mobileText">Go away, this doesn't work on mobile yet &gt;:(</p>
    </div>
{:else}
    <div>
        <Nav/>
        <slot></slot>
        <Footer/>
    </div>
{/if}

<style>
    #mobileLanding{
        background-color: var(--secondary);
    }

    #mobileText{
        position: absolute;
        width: 50%;
        color: var(--primary);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>