
<script lang="ts">
  import {email, Hint, HintGroup, required, useForm, validators,Form} from 'svelte-use-form';

  function validate(args) {
    console.log(args)
    return false;
  }

  const form = useForm();
</script>

<form style="width:100%;height:100%"  use:form={validate} method="post"  >
    <div class="login h-full w-full grid-h grid-align-middle-center bg-palette-red-dark">
        <div class="form grid-v grid-align-middle-center">
            <div class="avatarHolder">
                <div class="avatar grid-h grid-align-middle-center">avatar</div>
            </div>
            <div class="name pad-2"><input type="email" name="email" use:validators={[required, email]}/></div>
            <div class="name pad-2"><input type="password" name="password" use:validators={[required]}/></div>
            <button disabled={!$form.valid}>Login</button>
            <div class="retrieve pad-6">retrieve</div>
        </div>
    </div>
</form>
<style lang="scss">
  .login {
    color: white;
    position: relative;
  }

  .form {
    height: 33% !important;
    width: 20%;
    position: relative;

    .avatarHolder {
      width: 50%;
      padding-bottom: 50%;
      position: relative;

      .avatar {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 5px 1px rgba(32, 123, 21, 0.3);
        background-color: rgba(255,255,255,0.3);
      }
    }

    .name {
      text-align: center;
      margin: 0.5rem;
    }

    .input {

    }
  }
</style>