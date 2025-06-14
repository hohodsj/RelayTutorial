/**
 * @generated SignedSource<<2cac08f415afff2ebe2f3ae6d1b6efb5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type OrganizationKind = "COMMERCIAL" | "GOVERNMENT" | "JOURNALISTIC" | "NONPROFIT" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PosterDetailsHovercardContentsBodyFragment$data = {
  readonly id: string;
  readonly joined: string | null | undefined;
  readonly location?: {
    readonly name: string;
  } | null | undefined;
  readonly name: string | null | undefined;
  readonly organizationKind?: OrganizationKind | null | undefined;
  readonly profilePicture: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
  } | null | undefined;
  readonly " $fragmentType": "PosterDetailsHovercardContentsBodyFragment";
};
export type PosterDetailsHovercardContentsBodyFragment$key = {
  readonly " $data"?: PosterDetailsHovercardContentsBodyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PosterDetailsHovercardContentsBodyFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PosterDetailsHovercardContentsBodyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "joined",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ImageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "organizationKind",
          "storageKey": null
        }
      ],
      "type": "Organization",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Location",
          "kind": "LinkedField",
          "name": "location",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "Person",
      "abstractKey": null
    }
  ],
  "type": "Actor",
  "abstractKey": "__isActor"
};
})();

(node as any).hash = "7998c23a1b1f800882bcfaeadbd29abf";

export default node;
