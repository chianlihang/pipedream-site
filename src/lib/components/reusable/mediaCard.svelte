<script>
    export let id;
    export let title;
    export let thumbnail;
    export let desc;
</script>

<!-- project card -->
<div id="projectCard" class="textColor-primary inlineBlock">
    <img id="thumbnail" src="{thumbnail}" alt="{title} thumbnail.">
    <div id="title-flex">
        <h4 id="title">{title}</h4>
    </div>

    <div id="details-flex">
        
        <p id="desc">{desc}</p>
    </div>
</div>

<style>
    #projectCard{
        height: 80vh;
        /* height of thumbnail times 4/3 aspect ratio plus 2px border */
        width: calc(60vh + 2px);
    }

    /* card flexbox */
    #title-flex{
        display: flex;
        gap: 1em;
    }

    #title{
        flex-grow: 1;
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #years{
        flex-grow: 1;
        text-align: right;
    }

    #details-flex{
        display: flex;
        gap: 1em;
    }

    #desc{
        flex-grow: 5;
    }

    #skills{
        flex-grow: 1;
    }

    #thumbnail{
        margin-top: 5vh;
        margin-bottom: 7.5vh;
        height: 45vh;
        border: 1px solid var(--primary);
    }
</style>