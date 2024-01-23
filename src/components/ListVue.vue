<template>
    <div>
        <h5>{{ data.title }}</h5>
        <p>{{ data.date }}</p>
    </div>
</template>

<script>
export default {
    name: "ListVue",
    props: { data: Array },
};
</script>

<style></style>
