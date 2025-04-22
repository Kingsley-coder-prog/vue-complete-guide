<template>
    <section>
        <h2>My Friends: </h2>
        <ul>
            <li></li>
        </ul>
    </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel",
          phone: "123-456-7890",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie",
          phone: "098-765-4321",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>