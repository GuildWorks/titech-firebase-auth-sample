<template>
  <v-card-text>
    <h2>新規登録画面</h2>
    <v-form>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-text-field
              v-model="email"
              label="メールアドレス"
              type="text"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <div class="text-center">
        <v-btn class="deep-purple" @click="signUp">
          登録
        </v-btn>
      </div>
    </v-form>
  </v-card-text>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    signUp() {
      // TODO: 新規登録処理
    }
  }
}
</script>
