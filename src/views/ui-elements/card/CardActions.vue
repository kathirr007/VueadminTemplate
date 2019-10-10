<!-- =========================================================================================
    File Name: CardActions.vue
    Description: Card with actions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div class="vx-row">
        <div class="vx-col w-full mb-base">
            <vx-card title="Card Actions" action-buttons @refresh="closeCardAnimationDemo">
            <table style="width:100%" class="border-collapse">
                <tr>
                    <th class="p-2 border border-solid d-theme-border-grey-light">Action</th>
                    <th class="p-2 border border-solid d-theme-border-grey-light text-center">Icon</th>
                    <th class="p-2 border border-solid d-theme-border-grey-light">Detail</th>
                </tr>
                <tr>
                    <td class="p-2 border border-solid d-theme-border-grey-light">Collapse</td>
                    <td class="border border-solid d-theme-border-grey-light text-center"><feather-icon icon="ChevronDownIcon" svgClasses="h-5 w-5" /></td>
                    <td class="p-2 border border-solid d-theme-border-grey-light">Collapse card content using collapse action.</td>
                </tr>
                <tr>
                    <td class="p-2 border border-solid d-theme-border-grey-light">Refresh Content</td>
                    <td class="border border-solid d-theme-border-grey-light text-center"><feather-icon icon="RotateCwIcon" svgClasses="h-4 w-4" /></td>
                    <td class="p-2 border border-solid d-theme-border-grey-light">Refresh your card content using refresh action.</td>
                </tr>
                <tr>
                    <td class="p-2 border border-solid d-theme-border-grey-light">Remove Card</td>
                    <td class="border border-solid d-theme-border-grey-light text-center"><feather-icon icon="XIcon" svgClasses="h-5 w-5" /></td>
                    <td class="p-2 border border-solid d-theme-border-grey-light">Remove card from page using remove card action</td>
                </tr>
            </table>
            </vx-card>
        </div>
        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
            <vx-card title="Collapsable Card" collapse-action>
                <p class="mb-3">You can create collapsible content card by setting <code>collapse-action</code> prop to <code>true</code>. By default it is set to false.</p>
                <p class="mb-3">You can also get this action if you set <code>action-buttons</code> prop to <code>true</code>.</p>
                <p>Click on <feather-icon icon="ChevronDownIcon" svgClasses="h-5 w-5" class="align-middle" /> icon to see card collapse in action.</p>
            </vx-card>
        </div>
        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
            <vx-card title="Refresh Content" refresh-content-action @refresh="closeCardAnimationDemo">
                <p class="mb-3">You can add refresh content action by setting <code>refresh-content-action</code> prop to <code>true</code>. By default it is set to false.</p>
                <p class="mb-3">You can also get this action if you set <code>action-buttons</code> prop to <code>true</code>.</p>
                <p>Click on <feather-icon icon="RotateCwIcon" svgClasses="h-4 w-4" class="align-middle" /> icon to see refresh card content in action.</p>
            </vx-card>
        </div>
        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <vx-card title="Remove Card" remove-card-action>
                <p class="mb-3">You can add remove card action by setting <code>remove-card-action</code> prop to <code>true</code>. By default it is set to false.</p>
                <p class="mb-3">You can also get this action if you set <code>action-buttons</code> prop to <code>true</code>.</p>
                <p>Click on <feather-icon icon="XIcon" svgClasses="h-4 w-4" class="align-middle" /> icon to see close card in action.</p>
            </vx-card>
        </div>
        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 md:mt-0 mt-base">
            <vx-card title="Action Buttons" action-buttons @refresh="closeCardAnimationDemo">
                <p class="mb-2">You can add all three action by setting <code>action-buttons</code> prop to <code>true</code>. By default it is set to false.</p>
                <p class="mb-1">Click on <feather-icon icon="ChevronDownIcon" svgClasses="h-5 w-5" class="align-middle" /> icon to see card collapse in action.</p>
                <p class="mb-1">Click on <feather-icon icon="RotateCwIcon" svgClasses="h-4 w-4" class="align-middle" /> icon to see refresh card content in action.</p>
                <p class="mb-1">Click on <feather-icon icon="XIcon" svgClasses="h-4 w-4" class="align-middle" /> icon to see close card in action.</p>
            </vx-card>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    closeCardAnimationDemo(card) {
      card.removeRefreshAnimation(3000);
    }
  }
}
</script>
