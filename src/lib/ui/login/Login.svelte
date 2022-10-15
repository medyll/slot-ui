<script lang="ts">
  import {email, Hint, HintGroup, required, useForm} from 'svelte-use-form';
  import {fade} from 'svelte/transition';

  import {userStore} from './store';
  import Backdrop from '../../base/backdrop/Backdrop.svelte';
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';
  import Button from '$lib/base/button/Button.svelte';
  import Icon from '../../base/icon/Icon.svelte';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());


  export const actions = {
    toggle       : (lo?: boolean) => {showLogin = lo ?? !showLogin;},
    toggleLoading: (lo?: boolean) => {loading = lo ?? !loading;},
  };


  export let showLogin: boolean = true;
  export let transition         = {type: fade, args: {}};
  export let fields             = {email: '', password: ''};

  export let loading = false;
  export let submitting     = false;
  let grantedError   = false;

  const validData: any = {};

  if (fields?.email) validData.email = {initial: fields?.email, validators: [required, email]};
  if (fields?.password) validData.password = {initial: fields?.password, validators: [required]};

  const form = useForm(validData);

  export let onSubmit = function (args) {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {resolve(true);}, 2000);
    });
  };

  function validate() {
    try {
      submitting = true;
      return onSubmit($form.values).then(() => {
        $userStore.logged = true;
        showLogin         = false;
        submitting        = false;
      }).catch((e) => {
        console.log(e);
        grantedError = true;
        submitting   = false;
      });

    } catch (e) {
      console.log(e);
      grantedError = true;
      submitting   = false;
    }
    return false;
  }


</script>
{#if showLogin}
    <Backdrop isOpen={showLogin} style="height:100%;" loading={loading}>
        <form bind:this={element} class="pos-abs top-0 h-full w-full {className}" method="post" on:submit|preventDefault={validate} use:form>
            <div transition:fade class="pos-rel h-full w-full flex-h flex-align-middle-center">
                <div class="form flex-v flex-align-middle-center">
                    <slot name="loginAvatarRoot">
                        <div class="avatarHolder marg-b-2">
                            <div class="avatar flex-h flex-align-middle-center">
                                {#if submitting}
                                    <Icon rotate fontSize="large" icon="loading"/>
                                {:else}
                                    <slot name="loginAvatar"></slot>
                                {/if}
                            </div>
                        </div>
                    </slot>
                    <slot name="loginForm">
                        <div class="pad-2">
                            <input class="input" name="email" type="text"/>
                        </div>
                        <HintGroup for="email" class="color-scheme-error">
                            <Hint on="required">This is a mandatory field</Hint>
                            <Hint hideWhenRequired on="email">Email is not valid</Hint>
                        </HintGroup>
                        <div class="pad-2">
                            <input name="password" type="password"/>
                        </div>
                        <Hint for="password" let:value on="required" class="color-scheme-error">
                            The password is required
                        </Hint>
                        <Button type="submit" primary="login" loading={submitting} disabled={!$form.valid}>
                            {#if submitting}<i class="fa fa-spinner fa-spin theme-text-primary-complement"></i>{/if}
                            Login
                        </Button>
                        {#if grantedError}
                            <div class="pad-1 color-scheme-error">Please verify your input</div>
                        {/if}
                    </slot>
                    {#if $$slots.slotRetrievePassword}
                        <div class="retrieve pad-2">
                            <slot name="slotRetrievePassword"></slot>
                        </div>
                    {/if}
                </div>
            </div>
        </form>
    </Backdrop>
{:else}
    <slot></slot>
{/if}
<style lang="scss">
  @import "../../styles/slotui-vars.css";
  @import "../../styles/presets.scss";
  form {
    z-index: 1000;
  }

  .form {
    height: 33% !important;
    width: 20%;

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
        border: 1px solid var(--theme-color-foreground-alpha);;
        box-shadow: 0 0 5px 1px rgba(32, 123, 21, 0.3);
        background-color: var(--theme-color-background-alpha);
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
