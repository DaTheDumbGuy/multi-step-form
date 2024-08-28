// utils/pricing.ts

import { PlanType, SubscriptionType } from "../types/types";


export function getPlanPrice(plan: PlanType, subscription: SubscriptionType): number {
    const pricing = {
        arcade: {
            monthly: 9,
            yearly: 90
        },
        advanced: {
            monthly: 12,
            yearly: 120
        },
        pro: {
            monthly: 15,
            yearly: 150
        }
    };

    return pricing[plan][subscription];
}

export function getAddOnsPrice(addOns: { [key: string]: string }): number {
    let price = 0;
    if (addOns?.online_service) price += 1;
    if (addOns?.larger_storage) price += 2;
    if (addOns?.customizable_profile) price += 2;
    return price;
}
