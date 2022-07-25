<script>
export default {
  methods: {
    getSrcSet(srcset, image) {
      if (!srcset) {
        let wpimg = image.replace(/jpe?g|png/, "webp");
        return `${wpimg} 1024w, ${wpimg}`;
      }
      return `${srcset.replace(/jpe?g|png/g, "webp")}`;
    },
    getImage(srcset, image) {
      if (!srcset) {
        return image;
      }
      return srcset.substring(srcset.lastIndexOf(" ") + 1);
    },
  },
};
</script>
