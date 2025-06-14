/**
 * @generated SignedSource<<c91288bfa285d3219a2ab20255fdbeb7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactsListFragment$data = {
  readonly contacts: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContactRowFragment">;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "ContactsListFragment";
};
export type ContactsListFragment$key = {
  readonly " $data"?: ContactsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContactsListFragment">;
};

import ContectsListRefectchQuery_graphql from './ContectsListRefectchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "search"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "viewer"
      ],
      "operation": ContectsListRefectchQuery_graphql
    }
  },
  "name": "ContactsListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "contacts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContactRowFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "5fafe14f237c35a5fdb2ff449f0e7b77";

export default node;
