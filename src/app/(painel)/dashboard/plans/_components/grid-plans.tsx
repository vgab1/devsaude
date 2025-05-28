import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { subscriptionPlans } from "@/utils/plans";
import { SubscriptionButton } from "./subscription-button";

export function GridPlans() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
      {subscriptionPlans.map((plan, index) => (
        <Card
          key={plan.id}
          className={`flex flex-col w-full mx-auto ${
            index === 1 && "pt-0 border-emerald-500"
          }`}
        >
          {index === 1 && (
            <div className="bg-emerald-500 w-full py-3 text-center rounded-t-xl">
              <p className="font-semibold text-white">PROMOÇÂO EXCLUSIVA</p>
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              {plan.features.map((features, index) => (
                <li key={index} className="text-sm md:text-base">
                  {features}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-gray-600 line-through">{plan.oldPrice}</p>
              <p className="text-black text-2xl font-bold">{plan.price}</p>
            </div>
          </CardContent>
          <CardFooter>
            <SubscriptionButton
              type={plan.id === "BASIC" ? "BASIC" : "PROFESSIONAL"}
            />
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
