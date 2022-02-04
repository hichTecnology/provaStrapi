module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '99ee8c7b9ae541e27c67a34901edd04a'),
  },
});
