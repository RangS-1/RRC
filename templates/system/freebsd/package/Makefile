PORTNAME=yourpackage
DISTVERSION=1.0.0
CATEGORIES=misc

DISTNAME=${PORTNAME}-${DISTVERSION}

MAINTAINER=example@linux.com
COMMENT=Your Description
WWW=https://github.com/yourusername/yourpackage

LICENSE=MIT

USE_GITHUB=yes
GH_ACCOUNT=githubusername
GH_PROJECT=githubreponame
GH_TAGNAME=v${DISTVERSION}

USES=python
USE_GITHUB=yes
USE_PYTHON=autoplist pep517
RUN_DEPENDS= \
	    ${PYTHON_PKGNAMEPREFIX}colorama>0:devel/py-colorama@${PY_FLAVOR}

.include <bsd.port.mk>