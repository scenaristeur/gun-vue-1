/**
 * Basic account management
 * @module Account
 * */

/**
 * @typedef {Object} Account - the user account interface
 * @property {Ref} pub - The pub key used to build the account
 * @property {Computed} color - The user account color derived from the pub key
 * @property {Object} profile - An object with all the `gun.user().get('profile')` data
 * @property {Number} pulse - latest timestamp from the user. It's emitted every second. Offline timeout is set to 10 seconds.
 * @property {Boolean} blink - A boolean that toggles on every timestamp received
 * @property {Sting} lastSeen - Shows 'online' if recent pulse is less then 10s ago or a human readable time string
 * @property {gun} db - `gun.user(pub)` ref to query any additional user data
 * @example
 * {
 * "pub": "XnpLVDYZWdl1NNgo6BlD6e3-n3Fzi-ZzVrzbIgYCYHo.9-hHUHaWNaAE6tMp800MMzNtDLtjicS53915IrBu4uc",
 * "color": "#f55c3d",
 * "profile": {
 *    "name": "Accord",
 *    "Message": "Use your imagination!",
 *    "Money": "$ 20000000000"
 * },
 * "pulse": 1642077216809,
 * "lastSeen": "online",
 * "blink": true
 * }
 */

import { useGun, gun } from "./useGun";
import { useColor } from "./useColor";
import ms from "ms";
import { computed, reactive, ref } from "vue";

const TIMEOUT = 10000;

const colorDeep = useColor("deep");

/**
 * Load and handle user's account by a public key
 * @param {ref} pub - The public key of a user as a string or a ref
 * @returns {Account}
 * @example
 * import { useAccount } from '@gun-vue/composables'
 *
 * const pub = 'XnpLVDYZWdl1NNgo6BlD6e3-n3Fzi-ZzVrzbIgYCYHo.9-hHUHaWNaAE6tMp800MMzNtDLtjicS53915IrBu4uc'
 *
 * const { account } = useAccount(pub)
 */

export function useAccount(pub = ref()) {
  const gun = useGun();
  if (typeof pub == "string") {
    pub = ref(pub);
  }
  const account = computed(() => {
    const obj = reactive({
      pub,
      color: computed(() => (pub.value ? colorDeep.hex(pub.value) : "gray")),
      profile: {
        name: "",
      },
      pulse: 0,
      lastSeen: computed(() => {
        let time = Date.now() - obj.pulse;
        if (time > TIMEOUT) {
          return ms(time);
        } else {
          return "online";
        }
      }),
      blink: false,
      db: gun.user(pub.value),
    });

    gun
      .user(pub.value)
      .get("pulse")
      .on((d) => {
        obj.blink = !obj.blink;
        obj.pulse = d;
      })
      .back()
      .get("profile")
      .map()
      .on((data, key) => {
        obj.profile[key] = data;
      });
    return obj;
  });

  return { account };
}

export function addProfileField(name) {
  gun.user().get("profile").get(name).put(null);
}