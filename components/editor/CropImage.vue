<template>
    <div style="width:600px; height:400px;">
        <cropper
	    :src="image"
	    :stencil-size="{
	    	width: w,
	    	height: h
	    }"
	    :stencil-props="{
	    	handlers: {},
	    	movable: false,
	    	resizable: false,
	    }"
        image-restriction="stencil"
        ref="cropper"
        />
    </div>

</template>

<script>
export default {
    props: {
        image: {
            type: String,
            require: true
        },
        w: {
            type: String,
            require: true
        },
        h: {
            type: String,
            require: true
        },
    }
}
</script>

<style>

</style>