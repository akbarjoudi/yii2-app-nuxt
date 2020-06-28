<template>
  <div>
    <b-container>
      <b-row style="min-height:48rem;" class="mt-5">
        <b-col>
          <h2>Heading</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>

          <p>
            <a class="btn btn-default" href="http://www.yiiframework.com/doc/">Yii Documentation »</a>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "About"
    };
  },
};
</script>