/**
 * @generated SignedSource<<40e3eb68ef8639077247ada28fa1ca39>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImageFragment$data = {
  readonly url: string;
  readonly " $fragmentType": "ImageFragment";
};
export type ImageFragment$key = {
  readonly " $data"?: ImageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "Image",
  "abstractKey": null
};

(node as any).hash = "791a055d58c81fdd3c2758f25f3d439d";

export default node;
