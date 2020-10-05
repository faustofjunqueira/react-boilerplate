import { Skeleton, Spin } from "antd";
import { SkeletonProps } from "antd/lib/skeleton";
import { SpinProps } from "antd/lib/spin";
import React from "react";
import { useTranslation } from "react-i18next";

export interface IWaitDataProps {
  loading: boolean;
  noLoading?: boolean;
  config?: {
    spin?: SpinProps,
    skeleton?: SkeletonProps
  }
}

export const WaitData: React.FC<IWaitDataProps> = ({
  loading,
  noLoading,
  config,
  children,
}) => {
  const {t} = useTranslation();

  if(loading) {
    if(noLoading) {
      return <></>;
    }

    if(config?.spin) {
      return (<>
        <Spin tip={config?.spin?.tip ? config?.spin?.tip : t("loading")} {...config?.spin} />
      </>);
    }

    return (
      <Skeleton avatar active paragraph={{rows: 4}} {...config?.skeleton}/>
    );

  }

  return <>{children}</>;
};
