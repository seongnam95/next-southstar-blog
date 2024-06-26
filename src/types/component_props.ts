import type React from 'react';

type ComponentPropsAs<
  C extends React.ElementType<any>,
  T extends React.ComponentPropsWithoutRef<C>['as'],
> = Omit<Extract<React.ComponentPropsWithoutRef<C>, { as: T }>, 'as' | 'asChild'>;

type ComponentPropsWithout<
  T extends React.ElementType,
  O extends Omit<string, keyof React.ComponentPropsWithoutRef<T>> | keyof React.ComponentPropsWithoutRef<T>,
> = Omit<React.ComponentPropsWithoutRef<T>, O & string>;

type RemovedProps = 'asChild' | 'defaultChecked' | 'defaultValue' | 'color';

export type { ComponentPropsAs, ComponentPropsWithout, RemovedProps };
